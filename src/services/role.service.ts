import httpStatus from "http-status";
import { Role } from "@/models";
import ApiError from "../utils/ApiError";
import { BaseTypes } from "@/types/base";
import { PageOptions, RoleModel } from "@/types";

/**
 * Create a role
 * @param {Object} roleBody
 * @returns {Promise<Role>}
 */
export const createRole = async (roleBody: RoleModel) => {
  if (await Role.isRoleTaken(roleBody.role as string)) {
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
export const queryRoles = async (filter: any, options: PageOptions) => {
  Object.assign(filter, { isDel: BaseTypes.NORMAL });
  return await Role.paginate(filter, options);
};

/**
 * Get role by id
 * @param {ObjectId} id
 * @returns {Promise<Role>}
 */
export const getRoleById = async (id: string) => {
  return Role.findOne({ _id: id, isDel: BaseTypes.NORMAL });
};

/**
 * Get role by role
 * @param {string} role
 * @returns {Promise<Role>}
 */
export const getRoleByRole = async (role: string) => {
  return Role.findOne({ role, isDel: BaseTypes.NORMAL });
};

/**
 * Update role by id
 * @param {ObjectId} roleId
 * @param {Object} updateBody
 * @returns {Promise<Role>}
 */
export const updateRoleById = async (roleId: string, updateBody: RoleModel) => {
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
export const deleteRoleById = async (roleId: string) => {
  const role = await getRoleById(roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, "Role not found");
  }
  Object.assign(role, { isDel: BaseTypes.IS_DEL });
  await role.save();
  return role;
};
