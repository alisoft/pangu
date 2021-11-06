const httpStatus = require("http-status");
const { RolePermission } = require("../models");
const ApiError = require("../utils/ApiError");
const { baseTypes } = require("../config/base");

/**
 * Create a RolePermission
 * @param {Object} userRolePermissionBody
 * @returns {Promise<RolePermission>}
 */
const createRolePermission = async (userRolePermissionBody) => {
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
const queryRolePermissions = async (filter, options) => {
  Object.assign(filter, { isDel: baseTypes.NORMAL });
  return await RolePermission.paginate(filter, options);
};

/**
 * Get RolePermission by id
 * @param {ObjectId} id
 * @returns {Promise<RolePermission>}
 */
const getRolePermissionById = async (id) => {
  return RolePermission.findOne({ _id: id, isDel: baseTypes.NORMAL });
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
const queryRolePermissionsByRoleId = async (roleId, options) => {
  return await RolePermission.paginate(
    { role: roleId, isDel: baseTypes.NORMAL },
    options
  );
};

/**
 * Update RolePermission by id
 * @param {ObjectId} rolePermissionId
 * @param {Object} updateBody
 * @returns {Promise<RolePermission>}
 */
const updateRolePermissionById = async (rolePermissionId, updateBody) => {
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
const deleteRolePermissionById = async (rolePermissionId) => {
  return await updateRolePermissionById(rolePermissionId, {
    isDel: baseTypes.IS_DEL,
  });
};

module.exports = {
  createRolePermission,
  queryRolePermissions,
  getRolePermissionById,
  queryRolePermissionsByRoleId,
  updateRolePermissionById,
  deleteRolePermissionById,
};
