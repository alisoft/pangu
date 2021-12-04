import { Request, Response } from "express";
import httpStatus from "http-status";
import { pick } from "../utils/pick";
import ApiError from "../utils/ApiError";
import { catchAsync } from "../utils/catchAsync";
import { permissionService } from "../services";
import { BaseTypes } from "../config/base";

export const createPermission = catchAsync(
  async (req: Request, res: Response) => {
    const permission = await permissionService.createPermission({
      ...req.body,
      // @ts-ignore
      createBy: req.user.id,
      // @ts-ignore
      updateBy: req.user.id,
      isDel: BaseTypes.NORMAL,
    });
    res.status(httpStatus.CREATED).send(permission);
  }
);

export const queryPermissions = catchAsync(
  async (req: Request, res: Response) => {
    const options = pick(req.query, ["sortBy", "limit", "page"]);
    const result = await permissionService.queryPermissions({}, options);
    res.send(result);
  }
);

export const getPermission = catchAsync(async (req: Request, res: Response) => {
  const permission = await permissionService.getPermissionById(
    req.params.permissionId
  );
  if (!permission) {
    throw new ApiError(httpStatus.NOT_FOUND, "Permission not found");
  }
  res.send(permission);
});

export const updatePermission = catchAsync(
  async (req: Request, res: Response) => {
    const permission = await permissionService.updatePermissionById(
      req.params.permissionId,
      {
        ...req.body,
        // @ts-ignore
        updateBy: req.user.id,
      }
    );
    res.send(permission);
  }
);

export const deletePermission = catchAsync(
  async (req: Request, res: Response) => {
    await permissionService.updatePermissionById(req.params.permissionId, {
      // @ts-ignore
      updateBy: req.user.id,
      isDel: BaseTypes.IS_DEL,
    });
    res.status(httpStatus.NO_CONTENT).send();
  }
);
