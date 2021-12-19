import Joi from "joi";
import { objectId } from "./custom.validation";
import { UserRolePermissionTypes } from "@/common/types/base";

export const createUserRolePermission = {
  body: Joi.object().keys({
    user: Joi.string().required().custom(objectId),
    role: Joi.string().required().custom(objectId),
    permission: Joi.string().required().custom(objectId),
    type: Joi.number()
      .required()
      .valid(UserRolePermissionTypes.ROLE, UserRolePermissionTypes.PERMISSION),
  }),
};

export const getUserRolePermissions = {
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

export const getUserRolePermissionsByUserId = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

export const getUserRolePermission = {
  params: Joi.object().keys({
    userRolePermissionId: Joi.string().custom(objectId),
  }),
};

export const updateUserRolePermission = {
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
          UserRolePermissionTypes.ROLE,
          UserRolePermissionTypes.PERMISSION
        ),
    })
    .min(1),
};

export const deleteUserRolePermission = {
  params: Joi.object().keys({
    userRolePermissionId: Joi.string().custom(objectId),
  }),
};
