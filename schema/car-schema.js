'use strict' ;
const mongoose = require('mongoose');

//// this is information about the car that will be rented and it will be connected with usercar schema here with name and there with car 
const car = mongoose.Schema({
  name :{ type : String , require:true },
  brand :{ type : String , require:true },
  type :{ type :String , require:true  } ,
  year :{ type : Number , require :true} ,
  dateavailable :{ type :Date , require: true},
  price_for_rent : { type : String , require : true},
});

module.exports =mongoose.model('car', car);