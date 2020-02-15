

require('dotenv').config();

// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser:true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options);
console.log('Connected to mongo');

const fn = require('../auth/setup-role.js');

console.log('Setup roles started...');
fn().then(() => {
  console.log('Setup roled finished');
}).catch(err => {
  console.log('Setup roles failed: ', err);
});
