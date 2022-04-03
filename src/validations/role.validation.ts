import Joi from "joi";
import { objectId } from "./custom.validation";

export const createRole = {
  body: Joi.object().keys({
    role: Joi.string().required(),
    name: Joi.string().required(),
    desc: Joi.string(),
  }),
};

export const getRoles = {
  query: Joi.object().keys({
    role: Joi.string(),
    name: Joi.string(),
    desc: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getRole = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

export const updateRole = {
  params: Joi.object().keys({
    roleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      role: Joi.string().required(),
      name: Joi.string().required(),
      desc: Joi.string(),
    })
    .min(1),
};

export const deleteRole = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};
