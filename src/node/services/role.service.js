const httpStatus = require("http-status");
const { Role } = require("../models");
const ApiError = require("../utils/ApiError");
const { baseTypes } = require("../config/base");

/**
 * Create a role
 * @param {Object} roleBody
 * @returns {Promise<Role>}
 */
const createRole = async (roleBody) => {
  if (await Role.isRoleTaken(roleBody.role)) {
    throw new ApiError(httpStatus.BAD_REQUEST, "role already taken");
  }
  return Role.create(roleBody);
};

/**
 * Query for roles
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryRoles = async (filter, options) => {
  Object.assign(filter, { isDel: baseTypes.NORMAL });
  return await Role.paginate(filter, options);
};

/**
 * Get role by id
 * @param {ObjectId} id
 * @returns {Promise<Role>}
 */
const getRoleById = async (id) => {
  return Role.findOne({ _id: id, isDel: baseTypes.NORMAL });
};

/**
 * Get role by role
 * @param {string} role
 * @returns {Promise<Role>}
 */
const getRoleByRole = async (role) => {
  return Role.findOne({ role, isDel: baseTypes.NORMAL });
};

/**
 * Update role by id
 * @param {ObjectId} roleId
 * @param {Object} updateBody
 * @returns {Promise<Role>}
 */
const updateRoleById = async (roleId, updateBody) => {
  const role = await getRoleById(roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, "Role not found");
  }
  if (updateBody.role && (await Role.isRoleTaken(updateBody.role, roleId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, "Role already taken");
  }
  Object.assign(role, updateBody);
  await role.save();
  return role;
};

/**
 * Delete role by id
 * @param {ObjectId} roleId
 * @returns {Promise<Role>}
 */
const deleteRoleById = async (roleId) => {
  const role = await getRoleById(roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, "Role not found");
  }
  Object.assign(role, { isDel: baseTypes.IS_DEL });
  await role.save();
  return role;
};

module.exports = {
  createRole,
  queryRoles,
  getRoleById,
  getRoleByRole,
  updateRoleById,
  deleteRoleById,
};
