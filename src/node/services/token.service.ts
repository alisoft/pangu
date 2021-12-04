import jwt from "jsonwebtoken";
import moment, { Moment } from "moment";
import httpStatus from "http-status";
import config from "../config/config";
import { Token } from "../models";
import ApiError from "../utils/ApiError";
import { tokenTypes } from "../config/tokens";
import * as userService from "./user.service";
import { UserModel } from "@/node/types";

/**
 * Generate token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {string} [secret]
 * @returns {string}
 */
export const generateToken = (
  userId: string,
  expires: Moment,
  type: string,
  secret = config.jwt.secret
) => {
  const payload = {
    sub: userId,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
  };
  return jwt.sign(payload, secret);
};

/**
 * Save a token
 * @param {string} token
 * @param {ObjectId} userId
 * @param {Moment} expires
 * @param {string} type
 * @param {boolean} [blacklisted]
 * @returns {Promise<Token>}
 */
export const saveToken = async (
  token: string,
  userId: string,
  expires: Moment,
  type: string,
  blacklisted = false
) => {
  return await Token.create({
    token,
    user: userId,
    expires: expires.toDate(),
    type,
    blacklisted,
  });
};

/**
 * Verify token and return token doc (or throw an error if it is not valid)
 * @param {string} token
 * @param {string} type
 * @returns {Promise<Token>}
 */
export const verifyToken = async (token: string, type: string) => {
  const payload = jwt.verify(token, config.jwt.secret);
  const tokenDoc = await Token.findOne({
    token,
    type,
    user: payload.sub as string,
    blacklisted: false,
  });
  if (!tokenDoc) {
    throw new Error("Token not found");
  }
  return tokenDoc;
};

/**
 * Generate auth tokens
 * @param {User} user
 * @returns {Promise<Object>}
 */
export const generateAuthTokens = async (user: UserModel) => {
  const accessTokenExpires = moment().add(
    config.jwt.accessExpirationMinutes,
    "minutes"
  );
  const accessToken = generateToken(
    user.id as string,
    accessTokenExpires,
    tokenTypes.ACCESS
  );

  const refreshTokenExpires = moment().add(
    config.jwt.refreshExpirationDays,
    "days"
  );
  const refreshToken = generateToken(
    user.id as string,
    refreshTokenExpires,
    tokenTypes.REFRESH
  );
  await saveToken(
    refreshToken,
    user.id as string,
    refreshTokenExpires,
    tokenTypes.REFRESH
  );

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires.toDate(),
    },
  };
};

/**
 * Generate reset password token
 * @param {string} email
 * @returns {Promise<string>}
 */
export const generateResetPasswordToken = async (email: string) => {
  const user = await userService.getUserByEmail(email);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "No users found with this email");
  }
  const expires = moment().add(
    config.jwt.resetPasswordExpirationMinutes,
    "minutes"
  );
  const resetPasswordToken = generateToken(
    user.id,
    expires,
    tokenTypes.RESET_PASSWORD
  );
  await saveToken(
    resetPasswordToken,
    user.id,
    expires,
    tokenTypes.RESET_PASSWORD
  );
  return resetPasswordToken;
};

/**
 * Generate verify email token
 * @param {User} user
 * @returns {Promise<string>}
 */
export const generateVerifyEmailToken = async (user: UserModel) => {
  const expires = moment().add(
    config.jwt.verifyEmailExpirationMinutes,
    "minutes"
  );
  const verifyEmailToken = generateToken(
    user.id as string,
    expires,
    tokenTypes.VERIFY_EMAIL
  );
  await saveToken(
    verifyEmailToken,
    user.id as string,
    expires,
    tokenTypes.VERIFY_EMAIL
  );
  return verifyEmailToken;
};
