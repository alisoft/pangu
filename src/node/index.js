const mongoose = require("mongoose");
const fs = require("fs");
const path = require("path");
const http = require("http");
const https = require("https");
const app = require("./app");
const config = require("./config/config");
const logger = require("./config/logger");
const privateKey = fs.readFileSync(
  path.join(__dirname, "../../.cert/cert.key"),
  "utf8"
);
const certificate = fs.readFileSync(
  path.join(__dirname, "../../.cert/cert.pem"),
  "utf8"
);

const requireHTTPS = (req, res, next) => {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
};

app.use(requireHTTPS);

const httpServer = http.createServer(app);
const httpsServer = https.createServer(
  { key: privateKey, cert: certificate },
  app
);
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  logger.info("Connected to MongoDB");
  httpServer.listen(config.port, function () {
    console.log("HTTP Server is running on: http://localhost:%s", config.port);
  });
  httpsServer.listen(config.sslPort, function () {
    console.log(
      "HTTPS Server is running on: https://localhost:%s",
      config.sslPort
    );
  });
});

const exitHandler = () => {
  if (httpServer || httpsServer) {
    httpServer &&
      httpServer.close(() => {
        logger.info("Server closed");
        process.exit(1);
      });
    httpsServer &&
      httpsServer.close(() => {
        logger.info("Server closed");
        process.exit(1);
      });
  } else {
    process.exit(1);
  }
};

const unexpectedErrorHandler = (error) => {
  logger.error(error);
  exitHandler();
};

process.on("uncaughtException", unexpectedErrorHandler);
process.on("unhandledRejection", unexpectedErrorHandler);

process.on("SIGTERM", () => {
  logger.info("SIGTERM received");
  if (httpServer) {
    httpServer.close();
  }
  if (httpsServer) {
    httpsServer.close();
  }
});
