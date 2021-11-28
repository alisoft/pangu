const user = require('./user.js');
const userNav = require('./userNav.js');
const message = require('./message.js');
const listTableList = require('./listTableList.js');
const form = require('./form.js');
const dashboardAnalysis = require('./dashboard/analysis.js');
const dashboardMonitor = require('./dashboard/monitor.js');
const dashboardWorkplace = require('./dashboard/workplace.js');
const basicList = require('./list/basic-list.js');
const cardList = require('./list/card-list.js');
const permission = require('./permission/index.js');
const notices = require('./notices.js');

module.exports = {
  ...user,
  ...userNav,
  ...form,
  ...message,
  ...listTableList,
  ...dashboardAnalysis,
  ...dashboardMonitor,
  ...dashboardWorkplace,
  ...basicList,
  ...cardList,
  ...permission,
  ...notices,
};
