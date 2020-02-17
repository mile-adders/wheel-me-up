// /* eslint-disable no-unused-vars */
// 'use strict';

// const mongoose = require('mongoose');
// let Car = require('./model/car-schema-model.js');

// const express = require('express');
// const users = requirerequire('./auth/users.js');
// const oauth = require('./auth/github.js/index.js');
// // const bearerAuth = require('./src/bearer-auth-middleware.js');
// const app = express();

// const MONGODB_URI = 'mongodb://localhost:27017/car-db';

// const mongooseOptions = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };


// app.use(express.static('./public'));
// app.use(express.json());

// app.post('/signup', (req, res) => {
//     try {
//         users.save(req.body)
//             .then(user => {
//                 let token = users.generateToken(user);
//                 res.status(200).send(token);
//             });

//     } catch (error) {

//         next(`ERROR: ${error.message}`);
//     }

// });

// app.post('/signin', basicAuth, (req, res) => {
//     res.status(200).send(req.token);
// });

// app.get('/users', basicAuth, (req, res) => {
//     res.status(200).json(users.list());
// });

// app.get('/oauth', oauth, (req, res) => {
//     res.status(200).send(req.token);
// });


// app.get('/user', bearerAuth, (req, res) => {

//     res.status(200).json(req.user);

// });



// mongoose.connect(MONGODB_URI, mongooseOptions);

// server.start(3000);

// // let ford = new Car() ;
// // ford.create({name : 'ford22' , brand : 'ford' , year : 2016 , price_for_rent : '200$'}) 


// // const car = mongoose.Schema({
// //     name :{ type : String , require:true },
// //     brand :{ type : String , require:true },
// //     type :{ type :String , require:true  } ,
// //     year :{ type : Number , require :true} ,
// //     price_for_rent : { type : String , require : true}
// // // })

// // let shoes = new Categories ;
// // let boats = new Products ;

// // shoes.create({name :"shoes"  })
// // boats.create({ name:"Puma", thePrice: 100 , categoryType:"shoes"})

  
'use strict';

require('dotenv').config();
const server = require('./auth/server.js');

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);
server.start(process.env.PORT);