'use strict';

const schema = require('../schema/usercar-schema');
const Model = require('./dynamic-model.js');

class Usercar extends Model{
  constructor(){
    super(schema);
  }
}

module.exports = Usercar ;