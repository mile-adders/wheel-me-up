/* eslint-disable indent */
'use strict' ;
const mongoose = require('mongoose');

const userCar = mongoose.Schema({
  pickupLocation :{ type : String , require:true },
  pickupDate :{ type : String , require:true },
  dropOffDate :{ type : Number , require :true} ,
  carType :{ type :String , require:true  } ,
 } ,
 {toObject: { virtuals: true}, toJSON: { virtuals: true }});

module.exports =mongoose.model('userCar', userCar);
