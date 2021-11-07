const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { permissionService } = require("../services");
const { baseTypes } = require("../config/base");

const createPermission = catchAsync(async (req, res) => {
  const permission = await permissionService.createPermission({
    ...req.body,
    createBy: req.user.id,
    updateBy: req.user.id,
    isDel: baseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(permission);
});

const queryPermissions = catchAsync(async (req, res) => {
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await permissionService.queryPermissions({}, options);
  res.send(result);
});

const getPermission = catchAsync(async (req, res) => {
  const permission = await permissionService.getPermissionById(
    req.params.permissionId
  );
  if (!permission) {
    throw new ApiError(httpStatus.NOT_FOUND, "Permission not found");
  }
  res.send(permission);
});

const updatePermission = catchAsync(async (req, res) => {
  const permission = await permissionService.updatePermissionById(
    req.params.permissionId,
    {
      ...req.body,
      updateBy: req.user.id,
    }
  );
  res.send(permission);
});

const deletePermission = catchAsync(async (req, res) => {
  await permissionService.updatePermissionById(req.params.permissionId, {
    updateBy: req.user.id,
    isDel: baseTypes.IS_DEL,
  });
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createPermission,
  queryPermissions,
  getPermission,
  updatePermission,
  deletePermission,
};
