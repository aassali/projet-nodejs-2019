const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (userId, first, offset) => {
  return connect()
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.find({ userId }, { limit: first, skip: offset }))
    .then(cursor => cursor.toArray());
};
