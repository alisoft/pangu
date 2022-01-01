import Joi from "joi";
import { objectId } from "./custom.validation";

export const createMenu = {
  body: Joi.object().keys({
    path: Joi.string().required(),
    component: Joi.string().required(),
    name: Joi.string().required(),
    redirect: Joi.string(),
    icon: Joi.string(),
    title: Joi.string(),
    lock: Joi.boolean(),
    parent: Joi.string(),
  }),
};

export const getMenus = {
  query: Joi.object().keys({
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

export const getMenu = {
  params: Joi.object().keys({
    menuId: Joi.string().custom(objectId),
  }),
};

export const updateMenu = {
  params: Joi.object().keys({
    menuId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      path: Joi.string().required(),
      component: Joi.string().required(),
      name: Joi.string().required(),
      redirect: Joi.string(),
      icon: Joi.string(),
      title: Joi.string(),
      lock: Joi.boolean(),
      parent: Joi.string(),
    })
    .min(1),
};

export const deleteMenu = {
  params: Joi.object().keys({
    menuId: Joi.string().custom(objectId),
  }),
};
