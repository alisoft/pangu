const Joi = require("joi");
const { objectId } = require("./custom.validation");
const { baseTypes } = require("../config/base");

const createRole = {
  body: Joi.object().keys({
    role: Joi.string().required(),
    name: Joi.string().required(),
    desc: Joi.string(),
    createBy: Joi.string().required(),
    updateBy: Joi.string().required(),
    isDel: Joi.number().required().valid(baseTypes.IS_DEL, baseTypes.NORMAL),
  }),
};

const getRoles = {
  query: Joi.object().keys({
    role: Joi.string(),
    name: Joi.string(),
    desc: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getRole = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

const updateRole = {
  params: Joi.object().keys({
    roleId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      role: Joi.string().required(),
      name: Joi.string().required(),
      desc: Joi.string(),
      updateBy: Joi.string().required(),
    })
    .min(1),
};

const deleteRole = {
  params: Joi.object().keys({
    roleId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createRole,
  getRoles,
  getRole,
  updateRole,
  deleteRole,
};
