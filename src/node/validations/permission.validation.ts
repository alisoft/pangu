import Joi from "joi";
import { objectId } from "./custom.validation";

export const createPermission = {
  body: Joi.object().keys({
    permission: Joi.string().required(),
    name: Joi.string().required(),
    desc: Joi.string(),
  }),
};

export const getPermissions = {
  query: Joi.object().keys({
    permission: Joi.string(),
    name: Joi.string(),
    desc: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getPermission = {
  params: Joi.object().keys({
    permissionId: Joi.string().custom(objectId),
  }),
};

export const updatePermission = {
  params: Joi.object().keys({
    permissionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      permission: Joi.string().required(),
      name: Joi.string().required(),
      desc: Joi.string(),
    })
    .min(1),
};

export const deletePermission = {
  params: Joi.object().keys({
    permissionId: Joi.string().custom(objectId),
  }),
};
