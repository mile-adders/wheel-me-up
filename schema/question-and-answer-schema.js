'use strict';

const mongoose = require('mongoose');

const questionAndAnswer = mongoose.Schema({
  question: { type: String, require: true},
  answer: {type: String},
});

module.exports = mongoose.model('questionsAndAnswer', questionAndAnswer);