'use strict' ;

const mongoose = require('mongoose');
require('./usercar-schema.js');

const car = mongoose.Schema({
  name :{ type : String , require:true },
  brand :{ type : String , require:true },
  type :{ type :String , require:true  } ,
  year :{ type : Number , require :true} ,
  dateavailable :{ type : Date , require: true},
  price_for_rent : { type : String , require : true},
}, { toObject: { virtuals: true}, toJSON: { virtuals: true }});

car.virtual('all_car', {
  ref :'userCar' ,
  localField : 'name',
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
