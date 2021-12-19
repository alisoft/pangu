import { Request, Response } from "express";
import httpStatus from "http-status";
import { pick } from "../utils/pick";
import ApiError from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";
import { userService } from "../services";
import { BaseTypes } from "@/common/types/base";

export const createUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.createUser({
    ...req.body,
    isDel: BaseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(user);
});

export const getUsers = catchAsync(async (req: Request, res: Response) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

export const getUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

export const updateUser = catchAsync(async (req: Request, res: Response) => {
  const user = await userService.updateUserById(req.params.userId, {
    ...req.body,
    // @ts-ignore
    updateBy: req.user.id,
  });
  res.send(user);
});

export const deleteUser = catchAsync(async (req: Request, res: Response) => {
  await userService.updateUserById(req.params.userId, {
    // @ts-ignore
    updateBy: req.user.id,
    isDel: BaseTypes.IS_DEL,
  });
  res.status(httpStatus.NO_CONTENT).send();
});
