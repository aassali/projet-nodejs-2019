const updateOne = require('../services/updateOne');

module.exports = (req, res, next) => {
  const userToUpdate = req.body;
  const { userId } = req.params;

  updateOne(userId, userToUpdate)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
