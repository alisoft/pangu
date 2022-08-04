import config from "../config/config";
const { version } = require("../../package.json");
export const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Pangu API documentation",
    version,
    license: {
      name: "MIT",
      url: "https://github.com/alisoft/pangu/blob/main/LICENSE.md",
    },
  },
  servers: [
    {
      url: `http://localhost:${config.port}/v1`,
    },
  ],
};
