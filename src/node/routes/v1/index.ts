import express from "express";
import config from "../../config/config";
import authRoute from "./auth.route";
import userRoute from "./user.route";
import roleRoute from "./role.route";
import permissionRoute from "./permission.route";
import rolePermissionRoute from "./role.permission.route";
import userRolePermissionRoute from "./user.role.permission.route";
import docsRoute from "./docs.route";

const router = express.Router();

interface CustomRoute {
  path: string;
  route: any;
}

const defaultRoutes: CustomRoute[] = [
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

const devRoutes: CustomRoute[] = [
  // routes available only in development mode
  {
    path: "/docs",
    route: docsRoute,
  },
];

defaultRoutes.forEach((route: CustomRoute) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === "development") {
  devRoutes.forEach((route: CustomRoute) => {
    router.use(route.path, route.route);
  });
}

export default router;
