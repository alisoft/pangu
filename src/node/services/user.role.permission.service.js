const httpStatus = require("http-status");
const { UserRolePermission } = require("../models");
const ApiError = require("../utils/ApiError");
const { baseTypes } = require("../config/base");

/**
 * Create a UserRolePermission
 * @param {Object} userRolePermissionBody
 * @returns {Promise<UserRolePermission>}
 */
const createUserRolePermission = async (userRolePermissionBody) => {
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
const queryUserRolePermissions = async (filter, options) => {
  Object.assign(filter, { isDel: baseTypes.NORMAL });
  return await UserRolePermission.paginate(filter, options);
};

/**
 * Get UserRolePermission by id
 * @param {ObjectId} id
 * @returns {Promise<UserRolePermission>}
 */
const getUserRolePermissionById = async (id) => {
  return UserRolePermission.findOne({ _id: id, isDel: baseTypes.NORMAL });
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
const queryUserRolePermissionsByUserId = async (userId, options) => {
  return await UserRolePermission.paginate(
    { user: userId, isDel: baseTypes.NORMAL },
    options
  );
};

/**
 * Update UserRolePermission by id
 * @param {ObjectId} userRolePermissionId
 * @param {Object} updateBody
 * @returns {Promise<UserRolePermission>}
 */
const updateUserRolePermissionById = async (
  userRolePermissionId,
  updateBody
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
const deleteUserRolePermissionById = async (userRolePermissionId) => {
  return await updateUserRolePermissionById(userRolePermissionId, {
    isDel: baseTypes.IS_DEL,
  });
};

module.exports = {
  createUserRolePermission,
  queryUserRolePermissions,
  getUserRolePermissionById,
  queryUserRolePermissionsByUserId,
  updateUserRolePermissionById,
  deleteUserRolePermissionById,
};
