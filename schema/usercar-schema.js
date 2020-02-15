'use strict' ;
const mongoose = require('mongoose')

/////// her the schema for person who will renter the car 
const userCar = mongoose.Schema({
    user :{ type : String , require:true },
    email :{ type : String , require:true },
    car :{ type :String , require:true  } ,
    dailyRentTime :{ type : Number , require :true} ,
    dateOut : { type : Date , require : true}
})

module.exports =mongoose.model('userCar', userCar);