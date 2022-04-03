import { Request, Response } from "express";
import httpStatus from "http-status";
import { pick } from "../utils/pick";
import ApiError from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";
import { rolePermissionService } from "../services";
import { BaseTypes } from "../types/base";

export const createRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    const rolePermission = await rolePermissionService.createRolePermission({
      ...req.body,
      // @ts-ignore
      createBy: req.user.id,
      // @ts-ignore
      updateBy: req.user.id,
      isDel: BaseTypes.NORMAL,
    });
    res.status(httpStatus.CREATED).send(rolePermission);
  }
);

export const queryRolePermissions = catchAsync(
  async (req: Request, res: Response) => {
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await rolePermissionService.queryRolePermissions(
      {},
      options
    );
    res.send(result);
  }
);

export const queryRolePermissionsByRoleId = catchAsync(
  async (req: Request, res: Response) => {
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await rolePermissionService.queryRolePermissionsByRoleId(
      req.params.roleId,
      options
    );
    res.send(result);
  }
);

export const getRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    const rolePermission = await rolePermissionService.getRolePermissionById(
      req.params.rolePermissionId
    );
    if (!rolePermission) {
      throw new ApiError(httpStatus.NOT_FOUND, "RolePermission not found");
    }
    res.send(rolePermission);
  }
);

export const updateRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    const rolePermission = await rolePermissionService.updateRolePermissionById(
      req.params.rolePermissionId,
      {
        ...req.body,
        // @ts-ignore
        updateBy: req.user.id,
      }
    );
    res.send(rolePermission);
  }
);

export const deleteRolePermission = catchAsync(
  async (req: Request, res: Response) => {
    await rolePermissionService.updateRolePermissionById(
      req.params.rolePermissionId,
      {
        // @ts-ignore
        updateBy: req.user.id,
        isDel: BaseTypes.IS_DEL,
      }
    );
    res.status(httpStatus.NO_CONTENT).send();
  }
);
