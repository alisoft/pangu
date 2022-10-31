import Joi from "joi";
import { objectId } from "./custom.validation";

export const createRolePermission = {
  body: Joi.object().keys({
    role: Joi.string().required().custom(objectId),
    permission: Joi.string().required().custom(objectId),
  }),
};

export const getRolePermissions = {
  query: Joi.object().keys({
    role: Joi.string(),
    permission: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getRolePermissionsByRoleId = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

export const getRolePermission = {
  params: Joi.object().keys({
    rolePermissionId: Joi.string().custom(objectId),
  }),
};

export const updateRolePermission = {
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

export const deleteRolePermission = {
  params: Joi.object().keys({
    rolePermissionId: Joi.string().custom(objectId),
  }),
};
