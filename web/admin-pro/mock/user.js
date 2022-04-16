const usernames = ['ant.design', 'admin', 'superuser'];
const passwords = ['ant.design', 'admin'];

module.exports = {
  'GET /api/currentUser': (req, res) => {
    res.send({
      name: 'Serati Ma',
      avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png',
      userid: '00000001',
      email: 'antdesign@alipay.com',
      signature: '海纳百川，有容乃大',
      title: '交互专家',
      group: '蚂蚁金服－某某某事业群－某某平台部－某某技术部－UED',
      tags: [
        {
          key: '0',
          label: '很有想法的',
        },
        {
          key: '1',
          label: '专注设计',
        },
        {
          key: '2',
          label: '辣~',
        },
        {
          key: '3',
          label: '大长腿',
        },
        {
          key: '4',
          label: '川妹子',
        },
        {
          key: '5',
          label: '海纳百川',
        },
      ],
      notifyCount: 12,
      unreadCount: 11,
      country: 'China',
      geographic: {
        province: {
          label: '浙江省',
          key: '330000',
        },
        city: {
          label: '杭州市',
          key: '330100',
        },
      },
      address: '西湖区工专路 77 号',
      phone: '0752-268888888',
      role: {
        id: 1,
        name: '管理员',
        describe: '管理员角色',
        permissions: [
          { id: 1001, roleId: 1, name: 'home', actions: ['query'] },
          { id: 1002, roleId: 1, name: 'dashboard', actions: ['query'] },
          { id: 1003, roleId: 1, name: 'form', actions: ['query', 'add', 'update', 'delete'] },
        ],
      },
    });
  },

  'POST /api/login/account': (req, res) => {
    const { password, username, type } = req.body;

    if (!usernames.includes(username) || !passwords.includes(password)) {
      res.status(400).send({
        data: {
          isLogin: true,
        },
        errorMessage: '账户或密码错误',
        success: false,
      });
      return;
    }

    // 模拟请求延迟
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 800);
    }).then(() => {
      res.send({
        type: 'account',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.PObw1E6dwD2Mo9vLQUO8CQxzITNXx4ABu7mS2zWLeJk',
        success: true,
      });
    });
  },

  'POST /api/logout': (req, res) => {
    // 模拟请求延迟
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 800);
    }).then(() => {
      res.send({
        success: true,
      });
    });
  },

  'POST /api/register': (req, res) => {
    const body = req.body;
    // 模拟请求延迟
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 800);
    }).then(() => {
      res.send({
        data: body,
        success: true,
      });
    });
  },
};
