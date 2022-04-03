const mongoose = require("mongoose");
const app = require("../build/app").default;
const { applyWs } = require("../build/ws");
const config = require("../build/config/config").default;
const logger = require("../build/config/logger").default;
const http = require("http");

app.set("port", config.port);
const server = http.createServer(app);

applyWs(server);
server.listen(config.port);
server.on("error", onError);
server.on("listening", onListening);

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind =
    typeof config.port === "string"
      ? "Pipe " + config.port
      : "Port " + config.port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      logger.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      logger.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
    logger.info("Connected to MongoDB");
  });
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  logger.info("Listening on " + bind);
}
