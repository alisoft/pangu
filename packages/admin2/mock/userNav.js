const userNavDataSource = [
  // dashboard
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
];

module.exports = {
  'GET /api/currentUserNav': (req, res) => {
    res.send(userNavDataSource);
  },
};
