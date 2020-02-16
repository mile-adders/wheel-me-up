/* eslint-disable indent */
'use strict' ;
const mongoose = require('mongoose');

/////// her the schema for person who will renter the car 
const userCar = mongoose.Schema({
  user :{ type : String , require:true },
  email :{ type : String , require:true },
  car :{ type :String , require:true  } ,
  dailyRentTime :{ type : Number , require :true} ,
  dateOut : { type : Date , require : true},
 } ,
 {toObject: { virtuals: true}, toJSON: { virtuals: true }});


//  userCar.virtual('user_car', {
//   ref :'car' ,
//   localField : 'car',
//   foreignField : 'name' ,
//   justOne : true ,
// });

// function join(){
//   try {
//     this.populate('user_car');
//   } 
//   catch(err){throw Error;}
// }

// userCar.pre('find', join);
// userCar.pre('findOne' , join);
module.exports =mongoose.model('userCar', userCar);