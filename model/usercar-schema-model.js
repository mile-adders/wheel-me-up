'use strict';

const schema = require('../schema/usercar-schema')
const Model = require('./dynamic-model.js')

class usercar extends Model{
    constructor(){
        super(schema)
    }
}

module.exports = new usercar() ;