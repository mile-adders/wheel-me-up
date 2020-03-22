/* eslint-disable indent */
'use strict' ;
const mongoose = require('mongoose');

const userCar = mongoose.Schema({
  location:{ type: data , require:true},
  dailyRentTime :{ type : Number , require :true} ,
  dateOut : { type : Date , require : true},
  
 } ,
 {toObject: { virtuals: true}, toJSON: { virtuals: true }});

module.exports =mongoose.model('userCar', userCar);
