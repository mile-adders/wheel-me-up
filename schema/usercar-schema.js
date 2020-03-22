/* eslint-disable indent */
'use strict' ;
const mongoose = require('mongoose');

const userCar = mongoose.Schema({
  PickUpLocation:{ type: String , require:true},
  PickUpDate :{ type : Date , require :true} ,
  DropOffDate : { type : Date , require : true},
  
 } ,
 {toObject: { virtuals: true}, toJSON: { virtuals: true }});

module.exports =mongoose.model('userCar', userCar);
