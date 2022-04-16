module.exports = {
  'POST /api/forms/basic-form': (req, res) => {
    const { title, goal } = req.body;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1500);
    }).then(() => {
      res.send({
        message: 'submit.ok',
        code: 200,
      });
    });
  },

  'POST /api/forms': (req, res) => {
    const body = req.body;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 3000);
    }).then(() => {
      res.send({
        message: 'transfer.success',
        code: 0,
      });
    });
  },
};
