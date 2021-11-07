const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { roleService } = require("../services");
const { baseTypes } = require("../config/base");

const createRole = catchAsync(async (req, res) => {
  const role = await roleService.createRole({
    ...req.body,
    createBy: req.user.id,
    updateBy: req.user.id,
    isDel: baseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(role);
});

const queryRoles = catchAsync(async (req, res) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await roleService.queryRoles({}, options);
  res.send(result);
});

const getRole = catchAsync(async (req, res) => {
  const role = await roleService.getRoleById(req.params.roleId);
  if (!role) {
    throw new ApiError(httpStatus.NOT_FOUND, "Role not found");
  }
  res.send(role);
});

const updateRole = catchAsync(async (req, res) => {
  const role = await roleService.updateRoleById(req.params.roleId, {
    ...req.body,
    updateBy: req.user.id,
  });
  res.send(role);
});

const deleteRole = catchAsync(async (req, res) => {
  await roleService.updateRoleById(req.params.roleId, {
    updateBy: req.user.id,
    isDel: baseTypes.IS_DEL,
  });
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createRole,
  queryRoles,
  getRole,
  updateRole,
  deleteRole,
};
