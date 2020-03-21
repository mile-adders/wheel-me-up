'use strict';






require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require("mongoose");
const mongooseOptions = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
};
mongoose.connect(process.env.MONGODB_URI, mongooseOptions);
let Family = mongoose.model("Family", { name: String, position: String });
//client
app.get("/", (req, res) => {
  // const m = new Family({ name: 'mahmoud',position:"Instructor" });
  // m.save().then(() => res.send('meow'));
  Family.find({}).then(data => {
    res.json(data);
  });
});
app.listen(PORT, () => console.log("listing on port", PORT));

// require('dotenv').config();
// const server = require('./auth/server.js');
// const MONGODB_URI = 'mongodb://localhost:27017/car-db';


// // Start up DB Server
// const mongoose = require('mongoose');
// const options = {
//   useNewUrlParser:true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };

// mongoose.connect(process.env.MONGODB_URI, options);
// server.start(process.env.PORT);