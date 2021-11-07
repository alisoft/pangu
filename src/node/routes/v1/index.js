const express = require("express");
const authRoute = require("./auth.route");
const userRoute = require("./user.route");
const roleRoute = require("./role.route");
const permissionRoute = require("./permission.route");
const rolePermissionRoute = require("./role.permission.route");
const userRolePermissionRoute = require("./user.role.permission.route");
const docsRoute = require("./docs.route");
const config = require("../../config/config");

const router = express.Router();

const defaultRoutes = [
  {
    path: "/auth",
    route: authRoute,
  },
  {
    path: "/users",
    route: userRoute,
  },
  {
    path: "/roles",
    route: roleRoute,
  },
  {
    path: "/permissions",
    route: permissionRoute,
  },
  {
    path: "/role/permissions",
    route: rolePermissionRoute,
  },
  {
    path: "/user/roles",
    route: userRolePermissionRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
