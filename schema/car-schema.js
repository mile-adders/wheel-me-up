'use strict' ;

const mongoose = require('mongoose');
require('./usercar-schema.js');

const car = mongoose.Schema({
  carName :{ type : String , require:true },
  brand :{ type : String , require:true },
  type :{ type :String , require:true  } ,
  year :{ type : Number , require :true} ,
  dateAvailable :{ type : Date , require: true},
  priceForRent : { type : String , require : true},
  location: { type :String , required : true},
  carImage_URL: { type :String , required : true},
}, { toObject: { virtuals: true}, toJSON: { virtuals: true }});

car.virtual('all_car', {
  ref :'userCar' ,
  localField : 'carName',
  foreignField : 'car' ,
  justOne : true ,
});

function join(){
  try {
    this.populate('all_car');
  } 
  catch(err){throw Error;}
}

car.pre('find', join);
car.pre('findOne' , join);

module.exports =mongoose.model('car', car);
