const findOne = require('../services/findOne');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  findOne(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
