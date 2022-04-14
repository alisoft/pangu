import express from "express";
import config from "../../config/config";
import authRoute from "./auth.route";
import loginRoute from "./login.route";
import userRoute from "./user.route";
import roleRoute from "./role.route";
import permissionRoute from "./permission.route";
import rolePermissionRoute from "./role.permission.route";
import userRolePermissionRoute from "./user.role.permission.route";
import docsRoute from "./docs.route";
import menuRoute from "./menu.route";
import httpStatus from "http-status";

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
    path: "/login",
    route: loginRoute,
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
    path: "/menus",
    route: menuRoute,
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

router.get("/currentUser", (req, res) => {
  res.status(httpStatus.OK).json({
    name: "Serati Ma",
    avatar:
      "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png",
    userid: "00000001",
    email: "antdesign@alipay.com",
    signature: "海纳百川，有容乃大",
    title: "交互专家",
    group: "蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED",
    tags: [
      {
        key: "0",
        label: "很有想法的",
      },
      {
        key: "1",
        label: "专注设计",
      },
      {
        key: "2",
        label: "辣~",
      },
      {
        key: "3",
        label: "大长腿",
      },
      {
        key: "4",
        label: "川妹子",
      },
      {
        key: "5",
        label: "海纳百川",
      },
    ],
    notifyCount: 12,
    unreadCount: 11,
    country: "China",
    geographic: {
      province: {
        label: "浙江省",
        key: "330000",
      },
      city: {
        label: "杭州市",
        key: "330100",
      },
    },
    address: "西湖区工专路 77 号",
    phone: "0752-268888888",
    role: {
      id: 1,
      name: "管理员",
      describe: "管理员角色",
      permissions: [
        { id: 1001, roleId: 1, name: "home", actions: ["query"] },
        { id: 1002, roleId: 1, name: "dashboard", actions: ["query"] },
        {
          id: 1003,
          roleId: 1,
          name: "form",
          actions: ["query", "add", "update", "delete"],
        },
      ],
    },
  });
});

router.get("/currentUserNav", (req, res) => {
  res.status(httpStatus.OK).json([
    {
      name: "dashboard",
      parentId: 0,
      id: 1,
      meta: {
        icon: "HeartOutlined",
        title: "pages.dashboard.title",
        show: true,
      },
      component: "RouteView",
      redirect: "/workplace",
    },
    {
      name: "workplace",
      parentId: 1,
      id: 7,
      meta: {
        icon: "HistoryOutlined",
        title: "pages.dashboard.workplace.title",
        show: true,
      },
      component: "dashboard/workplace/index",
      path: "/workplace",
    },
    {
      name: "Analysis",
      parentId: 1,
      id: 2,
      meta: {
        icon: "HeartOutlined",
        title: "pages.dashboard.analysis.title",
        show: true,
      },
      component: "dashboard/analysis/index",
      path: "/dashboard/analysis",
    },
  ]);
});

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
