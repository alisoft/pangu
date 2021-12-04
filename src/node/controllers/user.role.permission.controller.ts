import { Request, Response } from "express";
import httpStatus from "http-status";
import { pick } from "../utils/pick";
import ApiError from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";
import { userRolePermissionService } from "../services";
import { BaseTypes } from "../config/base";
import { CustomRequest } from "@/node/types";

export const createUserRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    const userRolePermission =
      await userRolePermissionService.createUserRolePermission({
        ...req.body,
        // @ts-ignore
        createBy: req.user.id,
        // @ts-ignore
        updateBy: req.user.id,
        isDel: BaseTypes.NORMAL,
      });
    res.status(httpStatus.CREATED).send(userRolePermission);
  }
);

export const queryUserRolePermissions = catchAsync(
  async (req: Request, res: Response) => {
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await userRolePermissionService.queryUserRolePermissions(
      {},
      options
    );
    res.send(result);
  }
);

export const queryUserRolePermissionsByUserId = catchAsync(
  async (req: Request, res: Response) => {
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result =
      await userRolePermissionService.queryUserRolePermissionsByUserId(
        req.params.userId,
        options
      );
    res.send(result);
  }
);

export const getUserRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    const userRolePermission =
      await userRolePermissionService.getUserRolePermissionById(
        req.params.userRolePermissionId
      );
    if (!userRolePermission) {
      throw new ApiError(httpStatus.NOT_FOUND, "UserRolePermission not found");
    }
    res.send(userRolePermission);
  }
);

export const updateUserRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    const userRolePermission =
      await userRolePermissionService.updateUserRolePermissionById(
        req.params.userRolePermissionId,
        {
          ...req.body,
          // @ts-ignore
          updateBy: req.user.id,
        }
      );
    res.send(userRolePermission);
  }
);

export const deleteUserRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    await userRolePermissionService.updateUserRolePermissionById(
      req.params.userRolePermissionId,
      {
        // @ts-ignore
        updateBy: req.user.id,
        isDel: BaseTypes.IS_DEL,
      }
    );
    res.status(httpStatus.NO_CONTENT).send();
  }
);
