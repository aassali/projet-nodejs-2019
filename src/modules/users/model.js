const joi = require('@hapi/joi');
// const bcrypt = require('bcrypt');

const createModel = joi.object().keys({
  firstname: joi.string(),
  lastname: joi.string(),
  password: joi.string().required(),
  email: joi.string().email({ minDomainSegments: 2 }).required(),
}).with('firstname', 'lastname');

const updateModel = joi.object().keys({
  firstname: joi.string(),
  lastname: joi.string(),
  password: joi.string(),
  email: joi.string().email({ minDomainSegments: 2 }),
}).with('firstname', 'lastname');

module.exports = {
  createModel,
  updateModel,
};
