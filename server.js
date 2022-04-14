const path = require('path');
const fs = require('fs');
const express = require('express');
const httpStatus = require('http-status');
const homeManifest = require('./dist/admin-pro/node/ssr-manifest.json');
const { renderToString } = require('vue/server-renderer');
const homePath = path.join(__dirname, './dist/admin-pro', 'node', homeManifest['index.js']);
const createHomeApp = require(homePath).default;

const app = express();

app.use('/admin-pro-assets', express.static(path.join(__dirname, './dist/admin-pro/client', 'admin-pro-assets')));

const homeTemplate = fs.readFileSync(path.join(__dirname, './dist/admin-pro/client/index.html'), 'utf-8');

const authRouter = express.Router();

authRouter.post('/account', (req, res) => {
  res.status(httpStatus.OK).json({
    type: 'account',
    token:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.PObw1E6dwD2Mo9vLQUO8CQxzITNXx4ABu7mS2zWLeJk',
    success: true,
  });
});

const router = express.Router();

router.use('/login', authRouter);

router.get('/currentUser', (req, res) => {
  res.status(httpStatus.OK).json({
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
});

router.get('/currentUserNav', (req, res) => {
  res.status(httpStatus.OK).json([
    {
      name: 'dashboard',
      parentId: 0,
      id: 1,
      meta: {
        icon: 'HeartOutlined',
        title: 'pages.dashboard.title',
        show: true,
      },
      component: 'RouteView',
      redirect: '/workplace',
    },
    {
      name: 'workplace',
      parentId: 1,
      id: 7,
      meta: {
        icon: 'HistoryOutlined',
        title: 'pages.dashboard.workplace.title',
        show: true,
      },
      component: 'dashboard/workplace/index',
      path: '/workplace',
    },
    {
      name: 'Analysis',
      parentId: 1,
      id: 2,
      meta: {
        icon: 'HeartOutlined',
        title: 'pages.dashboard.analysis.title',
        show: true,
      },
      component: 'dashboard/analysis/index',
      path: '/dashboard/analysis',
    },
  ]);
});

app.use('/api', router);

app.get('/admin-pro/*', async (req, res) => {
  const { app, router } = createHomeApp();

  await router.push(req.url);
  await router.isReady();

  const appContent = await renderToString(app);

  const html = homeTemplate.toString().replace('<div id="app">', `<div id="app">${appContent}`);

  res.setHeader('Content-Type', 'text/html');
  res.send(html);
});

app.listen(3000, function () {
  console.log('http://localhost:3000');
});
