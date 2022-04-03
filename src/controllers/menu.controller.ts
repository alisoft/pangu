import { Request, Response } from "express";
import httpStatus from "http-status";
import { pick } from "@/utils/pick";
import ApiError from "../utils/ApiError";
import { catchAsync } from "@/utils/catchAsync";
import { menuService } from "../services";
import { BaseTypes } from "@/types/base";

export const createMenu = catchAsync(async (req: Request, res: Response) => {
  const role = await menuService.createMenu({
    ...req.body,
    // @ts-ignore
    createBy: req.user.id,
    // @ts-ignore
    updateBy: req.user.id,
    isDel: BaseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(role);
});

export const queryMenus = catchAsync(async (req: Request, res: Response) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await menuService.queryMenus({}, options);
  res.send(result);
});

export const getMenu = catchAsync(async (req: Request, res: Response) => {
  const menu = await menuService.getMenuById(req.params.menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, "Menu not found");
  }
  res.send(menu);
});

export const updateMenu = catchAsync(async (req: Request, res: Response) => {
  const menu = await menuService.updateMenuById(req.params.menuId, {
    ...req.body,
    // @ts-ignore
    updateBy: req.user.id,
  });
  res.send(menu);
});

export const deleteMenu = catchAsync(async (req: Request, res: Response) => {
  await menuService.updateMenuById(req.params.menuId, {
    // @ts-ignore
    updateBy: req.user.id,
    isDel: BaseTypes.IS_DEL,
  });
  res.status(httpStatus.NO_CONTENT).send();
});
