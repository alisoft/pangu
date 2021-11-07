const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createRolePermission = {
  body: Joi.object().keys({
    role: Joi.string().required().custom(objectId),
    permission: Joi.string().required().custom(objectId),
  }),
};

const getRolePermissions = {
  query: Joi.object().keys({
    role: Joi.string(),
    permission: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getRolePermissionsByRoleId = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

const getRolePermission = {
  params: Joi.object().keys({
    rolePermissionId: Joi.string().custom(objectId),
  }),
};

const updateRolePermission = {
  params: Joi.object().keys({
    rolePermissionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      role: Joi.string().required(),
      permission: Joi.string().required(),
    })
    .min(1),
};

const deleteRolePermission = {
  params: Joi.object().keys({
    rolePermissionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createRolePermission,
  getRolePermissions,
  getRolePermissionsByRoleId,
  getRolePermission,
  updateRolePermission,
  deleteRolePermission,
};
