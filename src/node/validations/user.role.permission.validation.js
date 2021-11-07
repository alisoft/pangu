const Joi = require("joi");
const { objectId } = require("./custom.validation");
const { baseTypes, userRolePermissionTypes } = require("../config/base");

const createUserRolePermission = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    role: Joi.string().required().custom(objectId),
    permission: Joi.string().required().custom(objectId),
    type: Joi.number()
      .required()
      .valid(userRolePermissionTypes.ROLE, userRolePermissionTypes.PERMISSION),
    createBy: Joi.string().required(),
    updateBy: Joi.string().required(),
    isDel: Joi.number().required().valid(baseTypes.IS_DEL, baseTypes.NORMAL),
  }),
};

const getUserRolePermissions = {
  query: Joi.object().keys({
    user: Joi.string(),
    role: Joi.string(),
    permission: Joi.string(),
    type: Joi.number(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getUserRolePermissionsByUserId = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const getUserRolePermission = {
  params: Joi.object().keys({
    userRolePermissionId: Joi.string().custom(objectId),
  }),
};

const updateUserRolePermission = {
  params: Joi.object().keys({
    userRolePermissionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      user: Joi.string().required(),
      role: Joi.string().required(),
      permission: Joi.string().required(),
      type: Joi.number()
        .required()
        .valid(
          userRolePermissionTypes.ROLE,
          userRolePermissionTypes.PERMISSION
        ),
      updateBy: Joi.string().required(),
    })
    .min(1),
};

const deleteUserRolePermission = {
  params: Joi.object().keys({
    userRolePermissionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createUserRolePermission,
  getUserRolePermissions,
  getUserRolePermissionsByUserId,
  getUserRolePermission,
  updateUserRolePermission,
  deleteUserRolePermission,
};
