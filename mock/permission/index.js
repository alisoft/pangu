// role table
const roleDataSource = [
  {
    id: 1,
    name: "管理员",
    describe: "管理员角色",
  },
  {
    id: 2,
    name: "会员",
    describe: "普通会员角色",
  },
];

// permission table
const permissionDataSource = [
  {
    id: 1000,
    name: "dashboard",
    label: "仪表盘",
    actions: ["add", "update", "query"],
  },
  {
    id: 1001,
    name: "form",
    label: "表单",
    actions: ["add", "delete", "update", "query"],
  },
  {
    id: 1002,
    name: "list",
    label: "列表",
    actions: ["add", "delete", "update", "query", "import", "export"],
  },
];

// role_permission table
const rolePermissionJoinDataSource = [
  {
    uid: 1,
    roleId: 1,
    permissionId: 1000,
  },
  {
    uid: 2,
    roleId: 1,
    permissionId: 1001,
  },
  {
    uid: 3,
    roleId: 1,
    permissionId: 1002,
  },
  {
    uid: 4,
    roleId: 2,
    permissionId: 1001,
  },
];

const userDataSource = [
  {
    id: 1,
    name: "dashboard",
    label: "Dashboard",
    email: "test@test.com",
    role: "admin",
    isEmailVerified: false,
  },
  {
    id: 2,
    name: "form",
    label: "Form",
    email: "test@test.com",
    role: "user",
    isEmailVerified: true,
  },
];

const menuDataSource = [
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/",
    component: "/layouts/index.vue",
    name: "index",
    redirect: "/workplace",
    id: "61cfd9af4e7c161cf8e999ea",
  },
  {
    lock: true,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/workplace",
    component: "/views/dashboard/workplace/index.vue",
    name: "Workplace",
    icon: "HistoryOutlined",
    parent: "61cfd9af4e7c161cf8e999ea",
    title: "pages.dashboard.workplace.title",
    id: "61cfdada4e7c161cf8e999f0",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/dashboard",
    component: "/layouts/route-view.vue",
    name: "Dashboard",
    title: "pages.dashboard.title",
    icon: "HeartOutlined",
    parent: "61cfd9af4e7c161cf8e999ea",
    id: "61cff4d94c6de8394a68297d",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/dashboard/welcome",
    component: "/views/dashboard/workplace2/index.vue",
    name: "welcome",
    title: "pages.dashboard.welcome.title",
    icon: "HeartOutlined",
    parent: "61cff4d94c6de8394a68297d",
    id: "61cff5074c6de8394a682980",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/dashboard/analysis",
    component: "/views/dashboard/analysis/index.vue",
    name: "Analysis",
    title: "pages.dashboard.analysis.title",
    icon: "HeartOutlined",
    parent: "61cff4d94c6de8394a68297d",
    id: "61cff5294c6de8394a682983",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/dashboard/monitor",
    component: "/views/dashboard/monitor/index.vue",
    name: "Monitor",
    title: "pages.dashboard.monitor.title",
    icon: "HeartOutlined",
    parent: "61cff4d94c6de8394a68297d",
    id: "61cff5474c6de8394a682986",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/system",
    component: "/layouts/route-view.vue",
    redirect: "/system/role-list",
    name: "system",
    title: "pages.system.title",
    icon: "TableOutlined",
    parent: "61cfd9af4e7c161cf8e999ea",
    id: "61cff5b54c6de8394a682989",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/system/role-list",
    component: "/views/system/role-list.vue",
    name: "role-list",
    title: "pages.system.role-list.title",
    parent: "61cff5b54c6de8394a682989",
    id: "61cff5eb4c6de8394a68298c",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/system/permission-list",
    component: "/views/system/permission-list.vue",
    name: "permission-list",
    title: "pages.system.permission-list.title",
    parent: "61cff5b54c6de8394a682989",
    id: "61cff5f84c6de8394a68298f",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/system/user-list",
    component: "/views/system/user-list.vue",
    name: "user-list",
    title: "pages.system.user-list.title",
    parent: "61cff5b54c6de8394a682989",
    id: "61cff6024c6de8394a682992",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/system/menu-list",
    component: "/views/system/menu-list.vue",
    name: "menu-list",
    title: "pages.system.menu-list.title",
    parent: "61cff5b54c6de8394a682989",
    id: "61cff60c4c6de8394a682995",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/jump-url",
    component: "/layouts/route-view.vue",
    redirect: "/jump-url/router",
    name: "jumpUrl",
    title: "pages.jumpUrl.title",
    icon: "LinkOutlined",
    parent: "61cfd9af4e7c161cf8e999ea",
    id: "61cff6a04c6de8394a682998",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "/jump-url/router",
    component: "/views/examples/jump-url/index.vue",
    name: "jumpUrlExamples",
    title: "pages.jumpUrl.router.title",
    parent: "61cff6a04c6de8394a682998",
    id: "61cff6ca4c6de8394a68299b",
  },
  {
    lock: false,
    target: "_blank",
    hideInMenu: false,
    hideChildrenInMenu: false,
    isDel: 0,
    path: "https://github.com/vueComponent/ant-design-vue",
    name: "github",
    title: "pages.jumpUrl.github.title",
    parent: "61cff6a04c6de8394a682998",
    id: "61cff880abfb6c3d6e535d4c",
  },
];

const genRoles = () => {
  return roleDataSource.map((item) => {
    const rpList = rolePermissionJoinDataSource
      .filter((rp) => rp.roleId === item.id)
      .map((rp) => {
        const currentAllowPermissions = permissionDataSource.filter(
          (permission) => permission.id === rp.permissionId
        );
        return currentAllowPermissions;
      })
      .flat();

    return {
      ...item,
      permissions: rpList,
    };
  });
};

const genPermissions = () => {
  return permissionDataSource.concat();
};

const genMenus = () => {
  return menuDataSource.concat();
};

const genUsers = () => {
  return userDataSource.map((item) => {
    const rpList = rolePermissionJoinDataSource
      .filter((rp) => rp.roleId === item.id)
      .map((rp) => {
        const currentAllowPermissions = permissionDataSource.filter(
          (permission) => permission.id === rp.permissionId
        );
        return currentAllowPermissions;
      })
      .flat();

    return {
      ...item,
      permissions: rpList,
    };
  });
};

const getRoles = (req, res) => {
  const { current = 1, pageSize = 10 } = req.query;
  const params = req.query || {};

  const dataSource = genRoles();

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${current}`, 10) || 1,
  };

  // 模拟请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(result);
  });
};
const getPermissions = (req, res) => {
  const { current = 1, pageSize = 10 } = req.query;
  const dataSource = genPermissions();

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${current}`, 10) || 1,
  };

  // 模拟请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(result);
  });
};
const getUsers = (req, res) => {
  const { current = 1, pageSize = 10 } = req.query || {};

  const dataSource = genUsers();

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${current}`, 10) || 1,
  };

  // 模拟请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(result);
  });
};
const getMenus = (req, res) => {
  const { current = 1, pageSize = 10 } = req.query || {};

  const dataSource = genMenus();

  const result = {
    data: dataSource,
    total: dataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${current}`, 10) || 1,
  };

  // 模拟请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(result);
  });
};

const addRole = (req, res) => {};
const addPermission = (req, res) => {
  const data = req.body;
  if (permissionDataSource.findIndex((item) => item.name === data.name) > -1) {
    // 模拟请求延迟
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, 800);
    }).then(() => {
      res.status(400).json({ success: false, message: "该权限名已存在" });
    });
  }
  data.id = new Date().getTime();
  permissionDataSource.push(data);

  // 模拟请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(data);
  });
};
const addUser = (req, res) => {};
const addMenu = (req, res) => {};

const updateRole = (req, res) => {};
const updatePermission = (req, res) => {
  const data = req.body;
  const item = permissionDataSource.find((item) => item.id === data.id);
  Object.assign(item, data);

  // 模拟请求延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(item);
  });
};
const updateUser = (req, res) => {};
const updateMenu = (req, res) => {};

const deleteUser = (req, res) => {};
const deleteMenu = (req, res) => {};

module.exports = {
  "GET /api/roles": getRoles,
  "GET /api/permissions": getPermissions,
  "GET /api/users": getUsers,
  "GET /api/menus": getMenus,

  "POST /api/role": addRole,
  "POST /api/permission": addPermission,
  "POST /api/users": addUser,
  "POST /api/menus": addMenu,

  "PUT /api/role": updateRole,
  "PUT /api/permission": updatePermission,
  "PUT /api/users/:userId": updateUser,
  "PUT /api/menus/:menuId": updateMenu,

  "DELETE /api/users/:userId": deleteUser,
  "DELETE /api/menus/:userId": deleteMenu,
};
