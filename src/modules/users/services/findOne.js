const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (userId) => {
  return connect()
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.findOne({ _id: ObjectId(userId) }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`Task not found for id: ${userId}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
