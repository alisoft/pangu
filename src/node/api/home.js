const ejs = require("ejs");
const path = require("path");
const fs = require("fs");

export default async (request, response) => {
  try {
    response.setHeader("Content-Type", "text/html");
    response.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");
    const ejsStr = fs.readFileSync(
      path.join(__dirname, "..", "ejs", "home.ejs"),
      "utf8"
    );
    const data = ejs.render(ejsStr, {
      title: "APIs",
      apis: ["/api/demo"],
    });
    response.end(data);
  } catch (e) {
    response.status(500).json({
      code: 20001,
      error: e,
    });
  }
};
