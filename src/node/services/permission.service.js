const httpStatus = require("http-status");
const { Permission } = require("../models");
const ApiError = require("../utils/ApiError");
const { baseTypes } = require("../config/base");

/**
 * Create a permission
 * @param {Object} permissionBody
 * @returns {Promise<Permission>}
 */
const createPermission = async (permissionBody) => {
  if (await Permission.isPermissionTaken(permissionBody.permission)) {
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
const queryPermissions = async (filter, options) => {
  Object.assign(filter, { isDel: baseTypes.NORMAL });
  return await Permission.paginate(filter, options);
};

/**
 * Get permission by id
 * @param {ObjectId} id
 * @returns {Promise<Permission>}
 */
const getPermissionById = async (id) => {
  return Permission.findOne({ _id: id, isDel: baseTypes.NORMAL });
};

/**
 * Get user by permission
 * @param {string} permission
 * @returns {Promise<Permission>}
 */
const getPermissionByPermission = async (permission) => {
  return Permission.findOne({ permission, isDel: baseTypes.NORMAL });
};

/**
 * Update permission by id
 * @param {ObjectId} permissionId
 * @param {Object} updateBody
 * @returns {Promise<Permission>}
 */
const updatePermissionById = async (permissionId, updateBody) => {
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
const deletePermissionById = async (permissionId) => {
  const permission = await getPermissionById(permissionId);
  if (!permission) {
    throw new ApiError(httpStatus.NOT_FOUND, "Permission not found");
  }
  Object.assign(permission, { isDel: baseTypes.IS_DEL });
  await permission.save();
  return permission;
};

module.exports = {
  createPermission,
  queryPermissions,
  getPermissionById,
  getPermissionByPermission,
  updatePermissionById,
  deletePermissionById,
};
