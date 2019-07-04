const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');


module.exports = (userToCreate) => {
  const user = {
    ...userToCreate,
    password: bcrypt.hashSync(userToCreate.password, 10),
  };

  return createModel.validate(user)
    .then(() => connect())
    .then(db => db.collection(collections.USERS))
    .then(collection => collection.insertOne(user))
    .then(dbResponse => dbResponse.ops[0]);

  /* Can also be write like the
  return model.validate(listToCreate, model)
    .then(() => {
      return connect()
    })
    .then((db) => {
      return db.collection(collections.LISTS)
    })
    .then((collection) => {
      return collection.insertOne(listToCreate)
    })
    .then((dbResponse) => {
      return dbResponse.ops[0]
    });
  */
};
