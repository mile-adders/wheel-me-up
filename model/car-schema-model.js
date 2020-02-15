'use strict';

const schema = require('../schema/car-schema.js');
const Model = require('./dynamic-model.js');

class Car extends Model{
  constructor(){
    super(schema);
  }
}

module.exports =  Car ;