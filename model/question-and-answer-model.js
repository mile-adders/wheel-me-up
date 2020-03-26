'use strict';

const schema = require('../schema/question-and-answer-schema.js');
const Model = require('./dynamic-model.js');

class Question extends Model {
  constructor(){
    super(schema);
  }
}

module.exports = Question;