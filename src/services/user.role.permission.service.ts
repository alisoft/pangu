import httpStatus from "http-status";
import { UserRolePermission } from "@/models";
import ApiError from "../utils/ApiError";
import { BaseTypes } from "@/types/base";
import { PageOptions, UserRolePermissionModel } from "@/types";

/**
 * Create a UserRolePermission
 * @param {Object} userRolePermissionBody
 * @returns {Promise<UserRolePermission>}
 */
export const createUserRolePermission = async (
  userRolePermissionBody: UserRolePermissionModel
) => {
  return UserRolePermission.create(userRolePermissionBody);
};

/**
 * Query for UserRolePermissions
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
export const queryUserRolePermissions = async (
  filter: any,
  options: PageOptions
) => {
  Object.assign(filter, { isDel: BaseTypes.NORMAL });
  return await UserRolePermission.paginate(filter, options);
};

/**
 * Get UserRolePermission by id
 * @param {ObjectId} id
 * @returns {Promise<UserRolePermission>}
 */
export const getUserRolePermissionById = async (id: string) => {
  return UserRolePermission.findOne({ _id: id, isDel: BaseTypes.NORMAL });
};

/**
 * Get UserRolePermissions by userId
 * @param {string} userId
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
export const queryUserRolePermissionsByUserId = async (
  userId: string,
  options: PageOptions
) => {
  return await UserRolePermission.paginate(
    { user: userId, isDel: BaseTypes.NORMAL },
    options
  );
};

/**
 * Update UserRolePermission by id
 * @param {ObjectId} userRolePermissionId
 * @param {Object} updateBody
 * @returns {Promise<UserRolePermission>}
 */
export const updateUserRolePermissionById = async (
  userRolePermissionId: string,
  updateBody: UserRolePermissionModel
) => {
  const userRolePermission = await getUserRolePermissionById(
    userRolePermissionId
  );
  if (!userRolePermission) {
    throw new ApiError(httpStatus.NOT_FOUND, "UserRolePermission not found");
  }
  Object.assign(userRolePermission, updateBody);
  await userRolePermission.save();
  return userRolePermission;
};

/**
 * Delete UserRolePermission by id
 * @param {ObjectId} userRolePermissionId
 * @returns {Promise<UserRolePermission>}
 */
export const deleteUserRolePermissionById = async (
  userRolePermissionId: string
) => {
  return await updateUserRolePermissionById(userRolePermissionId, {
    isDel: BaseTypes.IS_DEL,
  });
};
