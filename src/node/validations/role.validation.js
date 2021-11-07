const Joi = require("joi");
const { objectId } = require("./custom.validation");

const createRole = {
  body: Joi.object().keys({
    role: Joi.string().required(),
    name: Joi.string().required(),
    desc: Joi.string(),
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
