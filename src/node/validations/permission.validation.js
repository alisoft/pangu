const Joi = require("joi");
const { objectId } = require("./custom.validation");
const { baseTypes } = require("../config/base");

const createPermission = {
  body: Joi.object().keys({
    permission: Joi.string().required(),
    name: Joi.string().required(),
    desc: Joi.string(),
    createBy: Joi.string().required(),
    updateBy: Joi.string().required(),
    isDel: Joi.number().required().valid(baseTypes.IS_DEL, baseTypes.NORMAL),
  }),
};

const getPermissions = {
  query: Joi.object().keys({
    permission: Joi.string(),
    name: Joi.string(),
    desc: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getPermission = {
  params: Joi.object().keys({
    permissionId: Joi.string().custom(objectId),
  }),
};

const updatePermission = {
  params: Joi.object().keys({
    permissionId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      permission: Joi.string().required(),
      name: Joi.string().required(),
      desc: Joi.string(),
      updateBy: Joi.string().required(),
    })
    .min(1),
};

const deletePermission = {
  params: Joi.object().keys({
    permissionId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createPermission,
  getPermissions,
  getPermission,
  updatePermission,
  deletePermission,
};
