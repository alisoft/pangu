import httpStatus from "http-status";
import { Menu } from "@/models";
import ApiError from "../utils/ApiError";
import { BaseTypes } from "@/types/base";
import { PageOptions, MenuModel } from "@/types";

/**
 * Create a menu
 * @param {Object} userBody
 * @returns {Promise<Menu>}
 */
export const createMenu = async (userBody: MenuModel) => {
  return Menu.create(userBody);
};

/**
 * Query for menus
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
export const queryMenus = async (filter: any, options: PageOptions) => {
  Object.assign(filter, { isDel: BaseTypes.NORMAL });
  return await Menu.paginate(filter, options);
};

/**
 * Get menu by id
 * @param {ObjectId} id
 * @returns {Promise<Menu>}
 */
export const getMenuById = async (id: string) => {
  return Menu.findOne({ _id: id, isDel: BaseTypes.NORMAL });
};

/**
 * Update menu by id
 * @param {ObjectId} menuId
 * @param {Object} updateBody
 * @returns {Promise<Menu>}
 */
export const updateMenuById = async (menuId: string, updateBody: MenuModel) => {
  const menu = await getMenuById(menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, "Menu not found");
  }
  Object.assign(menu, updateBody);
  await menu.save();
  return menu;
};

/**
 * Delete menu by id
 * @param {ObjectId} menuId
 * @returns {Promise<Menu>}
 */
export const deleteMenuById = async (menuId: string, updateBody: MenuModel) => {
  const menu = await getMenuById(menuId);
  if (!menu) {
    throw new ApiError(httpStatus.NOT_FOUND, "Menu not found");
  }
  Object.assign(menu, { isDel: BaseTypes.IS_DEL });
  await menu.save();
  return menu;
};
