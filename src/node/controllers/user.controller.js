const httpStatus = require("http-status");
const pick = require("../utils/pick");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const { userService } = require("../services");
const { baseTypes } = require("../config/base");

const createUser = catchAsync(async (req, res) => {
  const user = await userService.createUser({
    ...req.body,
    isDel: baseTypes.NORMAL,
  });
  res.status(httpStatus.CREATED).send(user);
});

const getUsers = catchAsync(async (req, res) => {
  const filter = pick(req.query, ["name", "role"]);
  const options = pick(req.query, ["sortBy", "limit", "page"]);
  const result = await userService.queryUsers(filter, options);
  res.send(result);
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  res.send(user);
});

const updateUser = catchAsync(async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, {
    ...req.body,
    updateBy: req.user.id,
  });
  res.send(user);
});

const deleteUser = catchAsync(async (req, res) => {
  await userService.updateUserById(req.params.userId, {
    updateBy: req.user.id,
    isDel: baseTypes.IS_DEL,
  });
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
