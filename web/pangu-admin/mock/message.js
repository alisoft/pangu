const Mock = require('mockjs');

module.exports = {
  'POST /api/message/sms': (req, res) => {
    return res.json({ captcha: Mock.mock('@integer(10000, 99999)') });
  },
  'GET /api/message/captcha/sms': (req, res) => {
    return res.json({ captcha: Mock.mock('@integer(10000, 99999)') });
  },
};
