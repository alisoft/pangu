const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { rolePermissionService } = require("../services");
const { baseTypes } = require("../config/base");

const createRolePermission = catchAsync(async (req, res) => {
  const rolePermission = await rolePermissionService.createRolePermission({
    ...req.body,
    createBy: req.user.id,
    updateBy: req.user.id,
    isDel: baseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(rolePermission);
});

const queryRolePermissions = catchAsync(async (req, res) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await rolePermissionService.queryRolePermissions({}, options);
  res.send(result);
});

const queryRolePermissionsByRoleId = catchAsync(async (req, res) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await rolePermissionService.queryRolePermissionsByRoleId(
    req.params.roleId,
    options
  );
  res.send(result);
});

const getRolePermission = catchAsync(async (req, res) => {
  const rolePermission = await rolePermissionService.getRolePermissionById(
    req.params.rolePermissionId
  );
  if (!rolePermission) {
    throw new ApiError(httpStatus.NOT_FOUND, "RolePermission not found");
  }
  res.send(rolePermission);
});

const updateRolePermission = catchAsync(async (req, res) => {
  const rolePermission = await rolePermissionService.updateRolePermissionById(
    req.params.rolePermissionId,
    {
      ...req.body,
      updateBy: req.user.id,
    }
  );
  res.send(rolePermission);
});

const deleteRolePermission = catchAsync(async (req, res) => {
  await rolePermissionService.updateRolePermissionById(
    req.params.rolePermissionId,
    {
      updateBy: req.user.id,
      isDel: baseTypes.IS_DEL,
    }
  );
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createRolePermission,
  queryRolePermissions,
  queryRolePermissionsByRoleId,
  getRolePermission,
  updateRolePermission,
  deleteRolePermission,
};
