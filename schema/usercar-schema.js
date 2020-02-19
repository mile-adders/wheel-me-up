/* eslint-disable indent */
'use strict' ;
const mongoose = require('mongoose');

const userCar = mongoose.Schema({
  user :{ type : String , require:true },
  email :{ type : String , require:true },
  car :{ type :String , require:true  } ,
  dailyRentTime :{ type : Number , require :true} ,
  dateOut : { type : Date , require : true},
 } ,
 {toObject: { virtuals: true}, toJSON: { virtuals: true }});

module.exports =mongoose.model('userCar', userCar);
