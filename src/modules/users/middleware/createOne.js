const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const userToCreate = req.body;
  createOne(userToCreate)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
};
