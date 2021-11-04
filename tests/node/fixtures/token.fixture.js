const moment = require("moment");
const config = require("../../../src/node/config/config");
const { tokenTypes } = require("../../../src/node/config/tokens");
const tokenService = require("../../../src/node/services/token.service");
const { userOne, admin } = require("./user.fixture");

const accessTokenExpires = moment().add(
  config.jwt.accessExpirationMinutes,
  "minutes"
);
const userOneAccessToken = tokenService.generateToken(
  userOne._id,
  accessTokenExpires,
  tokenTypes.ACCESS
);
const adminAccessToken = tokenService.generateToken(
  admin._id,
  accessTokenExpires,
  tokenTypes.ACCESS
);

module.exports = {
  userOneAccessToken,
  adminAccessToken,
};
