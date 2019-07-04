const deleteOne = require('../services/deleteOne');

module.exports = (req, res, next) => {
  const { userId } = req.params;

  deleteOne(userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
