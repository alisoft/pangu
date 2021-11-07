const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userRolePermissionService } = require("../services");
const { baseTypes } = require("../config/base");

const createUserRolePermission = catchAsync(async (req, res) => {
  const userRolePermission =
    await userRolePermissionService.createUserRolePermission({
      ...req.body,
      createBy: req.user.id,
      updateBy: req.user.id,
      isDel: baseTypes.NORMAL,
    });
  res.status(httpStatus.CREATED).send(userRolePermission);
});

const queryUserRolePermissions = catchAsync(async (req, res) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await userRolePermissionService.queryUserRolePermissions(
    {},
    options
  );
  res.send(result);
});

const queryUserRolePermissionsByUserId = catchAsync(async (req, res) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result =
    await userRolePermissionService.queryUserRolePermissionsByUserId(
      req.params.userId,
      options
    );
  res.send(result);
});

const getUserRolePermission = catchAsync(async (req, res) => {
  const userRolePermission =
    await userRolePermissionService.getUserRolePermissionById(
      req.params.userRolePermissionId
    );
  if (!userRolePermission) {
    throw new ApiError(httpStatus.NOT_FOUND, "UserRolePermission not found");
  }
  res.send(userRolePermission);
});

const updateUserRolePermission = catchAsync(async (req, res) => {
  const userRolePermission =
    await userRolePermissionService.updateUserRolePermissionById(
      req.params.userRolePermissionId,
      {
        ...req.body,
        updateBy: req.user.id,
      }
    );
  res.send(userRolePermission);
});

const deleteUserRolePermission = catchAsync(async (req, res) => {
  await userRolePermissionService.updateUserRolePermissionById(
    req.params.userRolePermissionId,
    {
      updateBy: req.user.id,
      isDel: baseTypes.IS_DEL,
    }
  );
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUserRolePermission,
  queryUserRolePermissions,
  queryUserRolePermissionsByUserId,
  getUserRolePermission,
  updateUserRolePermission,
  deleteUserRolePermission,
};
