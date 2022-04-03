import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import passport from "passport";
import ApiError from "../utils/ApiError";
import { UserModel } from "../types";

const verifyCallback =
  (req: Request, resolve: any, reject: any) =>
  async (err: any, user: UserModel, info: any) => {
    if (err || info || !user) {
      return reject(
        new ApiError(httpStatus.UNAUTHORIZED, "Please authenticate")
      );
    }
    req.user = user;

    resolve();
  };

export const auth =
  () => async (req: Request, res: Response, next: NextFunction) => {
    return new Promise((resolve, reject) => {
      passport.authenticate(
        "jwt",
        { session: false },
        verifyCallback(req, resolve, reject)
      )(req, res, next);
    })
      .then(() => next())
      .catch((err) => next(err));
  };
