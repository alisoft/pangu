// role table
const roleDataSource = [
  {
    id: 1,
    name: '管理员',
    describe: '管理员角色',
  },
  {
    id: 2,
    name: '会员',
    describe: '普通会员角色',
  },
];

// permission table
const permissionDataSource = [
  {
    id: 1000,
    name: 'dashboard',
    label: '仪表盘',
    actions: ['add', 'update', 'query'],
  },
  {
    id: 1001,
    name: 'form',
    label: '表单',
    actions: ['add', 'delete', 'update', 'query'],
  },
  {
    id: 1002,
    name: 'list',
    label: '列表',
    actions: ['add', 'delete', 'update', 'query', 'import', 'export'],
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

const genRoles = () => {
  return roleDataSource.map(item => {
    const rpList = rolePermissionJoinDataSource
      .filter(rp => rp.roleId === item.id)
      .map(rp => {
        const currentAllowPermissions = permissionDataSource.filter(
          permission => permission.id === rp.permissionId,
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
  return new Promise(resolve => {
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
  return new Promise(resolve => {
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
  if (permissionDataSource.findIndex(item => item.name === data.name) > -1) {
    // 模拟请求延迟
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 800);
    }).then(() => {
      res.status(400).json({ success: false, message: '该权限名已存在' });
    });
  }
  data.id = new Date().getTime();
  permissionDataSource.push(data);

  // 模拟请求延迟
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(data);
  });
};

const updateRole = (req, res) => {};
const updatePermission = (req, res) => {
  const data = req.body;
  const item = permissionDataSource.find(item => item.id === data.id);
  Object.assign(item, data);

  // 模拟请求延迟
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(item);
  });
};

module.exports = {
  'GET /api/roles': getRoles,
  'GET /api/permissions': getPermissions,

  'POST /api/role': addRole,
  'POST /api/permission': addPermission,

  'PUT /api/role': updateRole,
  'PUT /api/permission': updatePermission,
};
