'use strict';

const mongoose = require('mongoose');
const server = require('./src/server.js');
let Car = require('./model/car-schema-model.js');


const MONGODB_URI = 'mongodb://localhost:27017/car-db';

const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URI, mongooseOptions);

server.start(3000);

// let ford = new Car() ;
// ford.create({name : 'ford22' , brand : 'ford' , year : 2016 , price_for_rent : '200$'}) 


// const car = mongoose.Schema({
//     name :{ type : String , require:true },
//     brand :{ type : String , require:true },
//     type :{ type :String , require:true  } ,
//     year :{ type : Number , require :true} ,
//     price_for_rent : { type : String , require : true}
// // })

// let shoes = new Categories ;
// let boats = new Products ;

// shoes.create({name :"shoes"  })
// boats.create({ name:"Puma", thePrice: 100 , categoryType:"shoes"})