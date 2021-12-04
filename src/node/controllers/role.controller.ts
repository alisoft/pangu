import { Request, Response } from "express";
import httpStatus from "http-status";
import { pick } from "../utils/pick";
import ApiError from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";
import { roleService } from "../services";
import { BaseTypes } from "../config/base";

export const createRole = catchAsync(async (req: Request, res: Response) => {
  const role = await roleService.createRole({
    ...req.body,
    // @ts-ignore
    createBy: req.user.id,
    // @ts-ignore
    updateBy: req.user.id,
    isDel: BaseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(role);
});

export const queryRoles = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await roleService.queryRoles({}, options);
  res.send(result);
});

export const getRole = catchAsync(async (req: Request, res: Response) => {
  const role = await roleService.getRoleById(req.params.roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, "Role not found");
  }
  res.send(role);
});

export const updateRole = catchAsync(async (req: Request, res: Response) => {
  const role = await roleService.updateRoleById(req.params.roleId, {
    ...req.body,
    // @ts-ignore
    updateBy: req.user.id,
  });
  res.send(role);
});

export const deleteRole = catchAsync(async (req: Request, res: Response) => {
  await roleService.updateRoleById(req.params.roleId, {
    // @ts-ignore
    updateBy: req.user.id,
    isDel: BaseTypes.IS_DEL,
  });
  res.status(httpStatus.NO_CONTENT).send();
});
