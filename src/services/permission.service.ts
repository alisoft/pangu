import httpStatus from "http-status";
import { Permission } from "@/models";
import ApiError from "../utils/ApiError";
import { BaseTypes } from "@/types/base";
import { PageOptions, PermissionModel } from "@/types";

/**
 * Create a permission
 * @param {Object} permissionBody
 * @returns {Promise<Permission>}
 */
export const createPermission = async (permissionBody: PermissionModel) => {
  if (await Permission.isPermissionTaken(permissionBody.permission!)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "permission already taken");
  }
  return Permission.create(permissionBody);
};

/**
 * Query for permissions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
export const queryPermissions = async (filter: any, options: PageOptions) => {
  Object.assign(filter, { isDel: BaseTypes.NORMAL });
  return await Permission.paginate(filter, options);
};

/**
 * Get permission by id
 * @param {ObjectId} id
 * @returns {Promise<Permission>}
 */
export const getPermissionById = async (id: string) => {
  return Permission.findOne({ _id: id, isDel: BaseTypes.NORMAL });
};

/**
 * Get user by permission
 * @param {string} permission
 * @returns {Promise<Permission>}
 */
export const getPermissionByPermission = async (permission: string) => {
  return Permission.findOne({ permission, isDel: BaseTypes.NORMAL });
};

/**
 * Update permission by id
 * @param {ObjectId} permissionId
 * @param {Object} updateBody
 * @returns {Promise<Permission>}
 */
export const updatePermissionById = async (
  permissionId: string,
  updateBody: PermissionModel
) => {
  const permission = await getPermissionById(permissionId);
  if (!permission) {
    throw new ApiError(httpStatus.NOT_FOUND, "Permission not found");
  }
  if (
    updateBody.permission &&
    (await Permission.isPermissionTaken(updateBody.permission, permissionId))
  ) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Permission already taken");
  }
  Object.assign(permission, updateBody);
  await permission.save();
  return permission;
};

/**
 * Delete permission by id
 * @param {ObjectId} permissionId
 * @returns {Promise<Permission>}
 */
export const deletePermissionById = async (permissionId: string) => {
  const permission = await getPermissionById(permissionId);
  if (!permission) {
    throw new ApiError(httpStatus.NOT_FOUND, "Permission not found");
  }
  Object.assign(permission, { isDel: BaseTypes.IS_DEL });
  await permission.save();
  return permission;
};
