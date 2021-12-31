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
    id: 1,
    name: "index",
    redirect: "/workplace",
    async: false,
    path: "/",
    component: "/layouts/index.vue",
    meta: {
      title: "",
      icon: "",
    },
    children: [
      {
        id: 11,
        name: "Workplace",
        redirect: "/workplace/workplace",
        path: "/workplace",
        component: "/layouts/route-view.vue",
        meta: {
          title: "pages.dashboard.workplace.title",
          icon: "HistoryOutlined",
        },
        children: [
          {
            id: 111,
            name: "Workplace",
            redirect: "",
            path: "/workplace/workplace",
            component: "/views/dashboard/workplace/index.vue",
            meta: {
              title: "pages.dashboard.workplace.title",
              icon: "HistoryOutlined",
              keepAlive: false,
              lock: true,
            },
          },
        ],
      },
      {
        id: 12,
        name: "Dashboard",
        redirect: "/dashboard/welcome",
        async: false,
        path: "/dashboard",
        component: "/layouts/route-view.vue",
        meta: {
          title: "pages.dashboard.title",
          icon: "HeartOutlined",
        },
        children: [
          {
            id: 121,
            name: "welcome",
            redirect: "",
            async: false,
            path: "/dashboard/welcome",
            component: "/views/dashboard/workplace2/index.vue",
            meta: {
              title: "pages.dashboard.welcome.title",
              icon: "HistoryOutlined",
            },
          },
          {
            id: 122,
            name: "Analysis",
            redirect: "",
            async: false,
            path: "/dashboard/analysis",
            component: "/views/dashboard/analysis/index.vue",
            meta: {
              title: "pages.dashboard.analysis.title",
              icon: "HeartOutlined",
            },
          },
          {
            id: 123,
            name: "Monitor",
            redirect: "",
            async: false,
            path: "/dashboard/monitor",
            component: "/views/dashboard/monitor/index.vue",
            meta: {
              title: "pages.dashboard.monitor.title",
              icon: "HeartOutlined",
            },
          },
        ],
      },
      {
        id: 13,
        name: "system",
        redirect: "/system/role-list",
        async: false,
        path: "/system",
        component: "/layouts/route-view.vue",
        meta: {
          title: "pages.system.title",
          icon: "TableOutlined",
        },
        children: [
          {
            id: 131,
            name: "role-list",
            redirect: "",
            async: false,
            path: "/system/role-list",
            component: "/views/system/role-list.vue",
            meta: {
              title: "pages.system.role-list.title",
              icon: "",
            },
          },
          {
            id: 132,
            name: "permission-list",
            redirect: "",
            async: false,
            path: "/system/permission-list",
            component: "/views/system/permission-list.vue",
            meta: {
              title: "pages.system.permission-list.title",
              icon: "",
            },
          },
          {
            id: 133,
            name: "user-list",
            redirect: "",
            async: false,
            path: "/system/user-list",
            component: "/views/system/user-list.vue",
            meta: {
              title: "pages.system.user-list.title",
              icon: "",
            },
          },
          {
            id: 134,
            name: "menu-list",
            redirect: "",
            async: false,
            path: "/system/menu-list",
            component: "/views/system/menu-list.vue",
            meta: {
              title: "pages.system.menu-list.title",
              icon: "",
            },
          },
        ],
      },
      {
        id: 14,
        path: "/jump-url",
        name: "jumpUrl",
        meta: { title: "pages.jumpUrl.title", icon: "LinkOutlined" },
        component: "/layouts/route-view.vue",
        redirect: "/jump-url/router",
        children: [
          {
            id: 141,
            path: "/jump-url/router",
            name: "jumpUrlExamples",
            meta: { title: "pages.jumpUrl.router.title" },
            component: "/views/examples/jump-url/index.vue",
          },
          {
            id: 142,
            path: "https://github.com/vueComponent/ant-design-vue",
            name: "github",
            meta: {
              title: "pages.jumpUrl.github.title",
              target: "_blank",
            },
            component: "",
          },
        ],
      },
      {
        id: 15,
        name: "nested",
        path: "/nested",
        meta: { title: "pages.nested.title", icon: "AppstoreAddOutlined" },
        component: "/layouts/route-view.vue",
        redirect: "/nested/menu1",
        children: [
          {
            id: 151,
            name: "nested-menu1",
            path: "/nested/menu1",
            meta: { title: "pages.nested.menu1.title" },
            component: "/views/examples/nested/menu1.vue",
            redirect: "/nested/menu1/menu1-1",
            children: [
              {
                id: 1511,
                name: "nested-menu1-1",
                path: "/nested/menu1/menu1-1",
                meta: {
                  title: "pages.nested.menu1-1.title",
                  authority: "nested-menu1",
                },
                component: "/views/examples/nested/menu1-1.vue",
              },
              {
                id: 1512,
                name: "nested-menu1-2",
                path: "/nested/menu1/menu1-2",
                meta: { title: "pages.nested.menu1-2.title" },
                redirect: "/nested/menu1/menu1-2/menu1-2-1",
                component: "/views/examples/nested/menu1-2.vue",
                children: [
                  {
                    id: 15121,
                    name: "nested-menu1-2-1",
                    path: "/nested/menu1/menu1-2/menu1-2-1",
                    meta: { title: "pages.nested.menu1-2-1.title" },
                    component: "/views/examples/nested/menu1-2-1.vue",
                  },
                ],
              },
            ],
          },
          {
            id: 152,
            name: "nested-menu2",
            path: "/nested/menu2",
            meta: { title: "pages.nested.menu2.title" },
            component: "/views/examples/nested/menu2.vue",
          },
          {
            id: 153,
            name: "nested-menu3",
            path: "/nested/menu3",
            meta: {
              title: "pages.nested.menu3.title",
              hideChildrenInMenu: true,
            },
            redirect: "/nested/menu3/menu3-1",
            component: "/views/examples/nested/menu3.vue",
            children: [
              {
                id: 1531,
                name: "nested-menu3-1",
                path: "/nested/menu3/menu3-1",
                meta: { title: "pages.nested.menu3-1.title" },
                component: "/views/examples/nested/menu3-1.vue",
              },
            ],
          },
        ],
      },
    ],
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
