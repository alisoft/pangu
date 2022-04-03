const moment = require("moment");
const config = require("../../../src/node/config/config");
const { TokenTypes } = require("../../../src/common/types/tokens");
const tokenService = require("../../../src/node/services/token.service");
const { userOne, admin } = require("./user.fixture");

const accessTokenExpires = moment().add(
  config.jwt.accessExpirationMinutes,
  "minutes"
);
const userOneAccessToken = tokenService.generateToken(
  userOne._id,
  accessTokenExpires,
  TokenTypes.ACCESS
);
const adminAccessToken = tokenService.generateToken(
  admin._id,
  accessTokenExpires,
  TokenTypes.ACCESS
);

module.exports = {
  userOneAccessToken,
  adminAccessToken,
};
