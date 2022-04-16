// mock tableListDataSource
const genList = (current, pageSize, status = undefined) => {
  const tableListDataSource = [];
  const filterStatus = status && status.length > 0;

  for (let i = 0; i < pageSize; i += 1) {
    const index = (current - 1) * 10 + i;
    tableListDataSource.push({
      key: index,
      disabled: i % 6 === 0,
      href: 'https://ant.design',
      avatar: [
        'https://gw.alipayobjects.com/zos/rmsportal/eeHMaZBwmTvLdIwMfBpg.png',
        'https://gw.alipayobjects.com/zos/rmsportal/udxAbMEhpwthVVcjLXik.png',
      ][i % 2],
      name: `TradeCode ${index}`,
      owner: '曲丽丽',
      desc: '这是一段描述',
      callNo: Math.floor(Math.random() * 1000),
      status: filterStatus
        ? status[Math.floor(Math.random() * 10) % status.length]
        : Math.floor(Math.random() * 10) % 4,
      updatedAt: new Date(),
      createdAt: new Date(),
      progress: Math.ceil(Math.random() * 100),
    });
  }
  tableListDataSource.reverse();
  return tableListDataSource;
};

function getRule(req, res, u) {
  let realUrl = u;
  if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
    realUrl = req.url;
  }
  const { current = 1, pageSize = 10, status } = req.query;
  const params = req.query || {};

  const tableListDataSource = genList(1, 100, status);

  let dataSource = [...tableListDataSource].slice((current - 1) * pageSize, current * pageSize);
  const sorter = params.sorter && JSON.parse(params.sorter);
  if (sorter) {
    dataSource = dataSource.sort((prev, next) => {
      let sortNumber = 0;
      Object.keys(sorter).forEach(key => {
        if (sorter[key] === 'descend') {
          if (prev[key] - next[key] > 0) {
            sortNumber += -1;
          } else {
            sortNumber += 1;
          }
          return;
        }
        if (prev[key] - next[key] > 0) {
          sortNumber += 1;
        } else {
          sortNumber += -1;
        }
      });
      return sortNumber;
    });
  }
  if (params.filter) {
    const filter = JSON.parse(params.filter);
    if (Object.keys(filter).length > 0) {
      dataSource = dataSource.filter(item => {
        return Object.keys(filter).some(key => {
          if (!filter[key]) {
            return true;
          }
          if (filter[key].includes(`${item[key]}`)) {
            return true;
          }
          return false;
        });
      });
    }
  }

  if (params.name) {
    dataSource = dataSource.filter(data => data.name.includes(params.name || ''));
  }
  const result = {
    data: dataSource,
    total: tableListDataSource.length,
    success: true,
    pageSize,
    current: parseInt(`${params.currentPage}`, 10) || 1,
  };

  // 模拟请求延迟
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 800);
  }).then(() => {
    res.json(result);
  });
}

module.exports = {
  'GET /api/rule': getRule,
};
