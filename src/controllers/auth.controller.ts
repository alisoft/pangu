import { Request, Response } from "express";
import httpStatus from "http-status";
import { catchAsync } from "@/utils/catchAsync";
import {
  authService,
  emailService,
  tokenService,
  userService,
} from "../services";
import { UserModel } from "@/types";

export const register = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.createUser(req.body);
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.CREATED).send({ user, tokens });
});

export const login = catchAsync(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await authService.loginUserWithEmailAndPassword(email, password);
  const tokens = await tokenService.generateAuthTokens(user);
  res.send({ user, tokens });
});

export const logout = catchAsync(async (req: Request, res: Response) => {
  await authService.logout(req.body.refreshToken);
  res.status(httpStatus.NO_CONTENT).send();
});

export const refreshTokens = catchAsync(async (req: Request, res: Response) => {
  const tokens = await authService.refreshAuth(req.body.refreshToken);
  res.send({ ...tokens });
});

export const forgotPassword = catchAsync(
  async (req: Request, res: Response) => {
    const resetPasswordToken = await tokenService.generateResetPasswordToken(
      req.body.email
    );
    await emailService.sendResetPasswordEmail(
      req.body.email,
      resetPasswordToken
    );
    res.status(httpStatus.NO_CONTENT).send();
  }
);

export const resetPassword = catchAsync(async (req: Request, res: Response) => {
  await authService.resetPassword(req.query.token as string, req.body.password);
  res.status(httpStatus.NO_CONTENT).send();
});

export const sendVerificationEmail = catchAsync(
  async (req: Request, res: Response) => {
    const verifyEmailToken = await tokenService.generateVerifyEmailToken(
      req.user as UserModel
    );
    await emailService.sendVerificationEmail(
      // @ts-ignore
      req.user.email,
      verifyEmailToken
    );
    res.status(httpStatus.NO_CONTENT).send();
  }
);

export const verifyEmail = catchAsync(async (req: Request, res: Response) => {
  await authService.verifyEmail(req.query.token as string);
  res.status(httpStatus.NO_CONTENT).send();
});
