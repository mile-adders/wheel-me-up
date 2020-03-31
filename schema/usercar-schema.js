/* eslint-disable indent */
'use strict' ;
const mongoose = require('mongoose');

const userCar = mongoose.Schema({
  pickupLocation :{ type : String , require:true },
  dateAvailable :{ type : Date , require:true },
  carType :{ type :String , require:true  } ,
  dropOffDate :{ type : Date , require :true} ,
 } ,
 {toObject: { virtuals: true}, toJSON: { virtuals: true }});

module.exports =mongoose.model('userCar', userCar);
