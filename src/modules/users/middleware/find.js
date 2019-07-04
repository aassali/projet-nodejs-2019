const find = require('../services/find');

module.exports = (req, res, next) => {
  const { userId } = req.params;
  const {
    first,
    offset,
  } = req.query;
  let firstInt;
  let offsetInt;

  if (first) firstInt = parseInt(first, 10);
  if (offset) offsetInt = parseInt(offset, 10);
  find(userId, firstInt, offsetInt)
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      next(err);
    });
};
