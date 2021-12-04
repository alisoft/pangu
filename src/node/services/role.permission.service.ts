import httpStatus from "http-status";
import { RolePermission } from "../models";
import ApiError from "../utils/ApiError";
import { BaseTypes } from "../config/base";
import { PageOptions, RolePermissionModel } from "@/node/types";

/**
 * Create a RolePermission
 * @param {Object} userRolePermissionBody
 * @returns {Promise<RolePermission>}
 */
export const createRolePermission = async (
  userRolePermissionBody: RolePermissionModel
) => {
  return RolePermission.create(userRolePermissionBody);
};

/**
 * Query for RolePermissions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
export const queryRolePermissions = async (
  filter: any,
  options: PageOptions
) => {
  Object.assign(filter, { isDel: BaseTypes.NORMAL });
  return await RolePermission.paginate(filter, options);
};

/**
 * Get RolePermission by id
 * @param {ObjectId} id
 * @returns {Promise<RolePermission>}
 */
export const getRolePermissionById = async (id: string) => {
  return RolePermission.findOne({ _id: id, isDel: BaseTypes.NORMAL });
};

/**
 * Get RolePermissions by roleId
 * @param {string} roleId
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
export const queryRolePermissionsByRoleId = async (
  roleId: string,
  options: PageOptions
) => {
  return await RolePermission.paginate(
    { role: roleId, isDel: BaseTypes.NORMAL },
    options
  );
};

/**
 * Update RolePermission by id
 * @param {ObjectId} rolePermissionId
 * @param {Object} updateBody
 * @returns {Promise<RolePermission>}
 */
export const updateRolePermissionById = async (
  rolePermissionId: string,
  updateBody: RolePermissionModel
) => {
  const rolePermission = await getRolePermissionById(rolePermissionId);
  if (!rolePermission) {
    throw new ApiError(httpStatus.NOT_FOUND, "RolePermission not found");
  }
  Object.assign(rolePermission, updateBody);
  await rolePermission.save();
  return rolePermission;
};

/**
 * Delete RolePermission by id
 * @param {ObjectId} rolePermissionId
 * @returns {Promise<RolePermission>}
 */
export const deleteRolePermissionById = async (rolePermissionId: string) => {
  return await updateRolePermissionById(rolePermissionId, {
    isDel: BaseTypes.IS_DEL,
  });
};
