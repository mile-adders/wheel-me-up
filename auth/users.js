/* eslint-disable camelcase */
// 'use strict';

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');

// const users = new mongoose.Schema({
//   username: {type: String, required: true, unique: true},
//   password: {type: String, required: true},
//   role: {type: String, required: true, default:'user', enum:['user', 'editor', 'admin']},
// });


// users.statics.checkCapabilities = (capability, role)=>{
//   console.log(capability, role);

//   let admin = ['read, create, update, delete'];
//   let editor = ['read, create, update'];
//   let user = ['read'];

//   if(role === 'admin' ){
//     for(let i = 0; i < admin.length;i++){
//       if(admin[i]) return true;
//     }
//   }
//   if(role === 'editor' ){
//     for(let i = 0; i < editor.length;i++){
//       if(editor[i]) return true;
//     }
//   }
//   if(role === 'user' ){
//     for(let i = 0; i < user.length;i++){
//       if(user[i]) return true;
//     }
//   }
// };

// users.pre('save', async function(){
//   if (this.isModified('password')) {
//     console.log('pre');
//     this.password = await bcrypt.hash(this.password, 10);
//   }
//   return Promise.reject();
// });

// users.statics.authenticateBasic = function(auth) {
//   return this.findOne({username:auth.username})
//     .then(user => user.passCompare(auth.password))
//     .catch(console.error);
// };

// users.methods.passCompare = function(password) {
//   return bcrypt.compare(password, this.password)
//     .then(valid => valid ? this : null);
// };



// users.statics.list =  async function(){
//   let results = await this.find({});
//   return results;
// };

// users.statics.authenticateToken = async function(token){
//   try {
//     let tokenObject = jwt.verify(token, process.env.SECRET);

//     if (tokenObject.username) {
//       return Promise.resolve(tokenObject);
//     } else {
//       return Promise.reject();
//     }
//   } catch (err) {
//     return Promise.reject();
//   }
// };
// module.exports = mongoose.model('users',users);



///////////////////google oauth
'use strict';

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwt_decode = require('jwt-decode');



const SECRET = process.env.SECRET || 'obada';

const user = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  ///////add the user roles
  role: { type: String, required: true, default: 'user', enum: ['user', 'admin'] },
  email: { type: String },
});

user.pre('save', async function() {
  //this.isModified('password')
  ///chek if it has a user schema
  if (!this.username) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  return Promise.reject();
});
//////// add the genaratetoken method
user.methods.generateToken = function(user) {
  let userData = {
    username: user.username,
    capabilities: user.role,
  };
    // console.log(userData);
  let token = jwt.sign(userData, SECRET);
  return token;
};

user.statics.createFromOauth = function(email) {
  if (!email) { return Promise.reject('Validation Error'); }

  return this.findOne({ email })
    .then(user => {
      if (!user) { throw new Error('User Not Found'); }
      console.log('Welcome Back', user.username);
      return user;
    })
    .catch( () => {
      console.log('Creating new user');
      let username = email;
      let password = 'none';
      return this.create({ username, password, email });
    });

};

user.statics.decode = function(token) {
  let decoded = jwt_decode(token);
  return decoded;
};

user.statics.authenticator = function(auth) {
  // let query = { username: auth.username };
  return this.findOne({ username: auth.username })
    .then(user => {
      console.log('user', user);
      return user.passwordComparator(auth.password);
    })
    .catch(console.error);
};

user.methods.passwordComparator = function(pass) {
  return bcrypt.compare(pass, this.password)
    .then(valid => {
      // console.log(this)
      return valid ? this : null;
    })
    .catch(console.error);
};

user.statics.siginTokenGenerator = function(user) {
  console.log('token');
  let token = {
    id: user._id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(token, SECRET);
};
user.methods.signupTokenGenerator = function(user) {
  let token = {
    id: user._id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(token, SECRET);
};

user.statics.authenticateToken = async function(token) {
  try {
    let tokenObject = jwt.verify(token, SECRET);
    if (tokenObject.username) {
      return Promise.resolve(tokenObject.username);
    } else {
      return Promise.reject();
    }
  } catch (e) {
    return Promise.reject();
  }
};

module.exports = mongoose.model('user', user);