// /* eslint-disable no-unused-vars */
// 'use strict';

// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const mongoose = require('mongoose');
// const jwt_decode = require('jwt-decode');
// let SECRET = 'cool mai' ;


// const users = new mongoose.Schema({
//   username: { type: String, required: true, unique: true },
//   password: { type: String, required: true } ,
//   role: { type: String , required: true ,default:'guest', enum: ['admin' , 'guest' , 'user'] } ,

// });

// users.statics.checkCpabilities = (capability , role) =>{

//   console.log('capability inside checkcapabilites' , capability);
//   console.log('role  inside checkcapabilites ' , role);
//   let admin = [ 'read' , 'create' , 'update' , 'delete'];
//   let user = ['read' , 'create'];
//   let guest = ['read'];

//   if(role === 'admin'){
//     for(let i = 0 ; i < admin.length ; i++){
//       if(admin[i] === capability) return true ;
//     }
//   }
//   if(role === 'user'){
//     for(let i = 0 ; i < user.length ; i++){
//       if( user[i] === capability ) return true ;
//     }
//   }
//   if ( role === 'guest'){
//     for(let i = 0 ; i < guest.length ; i++){
//       if(guest[i] === capability)  return true ;
//     }
//   }
// };


// users.statics.authenticateBasic = async function(user , password){

//   let foundUser = await this.find({username: user});


//   if (foundUser) {
//     let valid =
//     bcrypt.compare(password, foundUser[0].password);
//     return valid ? foundUser[0] : Promise.reject();
//   }
//   else {
//     Promise.reject();
//   }
// } ;



// //////// bearer auth /////
// users.statics.authbearerToken = async function(token){
//   try{
//     let tokenObject = await jwt.verify(token , SECRET);

//     if(tokenObject){
//       return Promise.resolve(tokenObject);
//     } else{
//       return Promise.reject();
//     }

//   }catch(err){
//     console.log(err);
//   }

// };

// //   Method to generate a Token following a valid login
// users.statics.generateToken = function(user) {

//   let userInfo = {
//     // id: user._id,
//     username : this.username,
//     password : this.password,
//     role : this.role,
//   };

//   let token = jwt.sign( userInfo, SECRET);


//   return token;
// };

// // users.statics.createFromOauth = function(email) {
// //   if (!email) { return Promise.reject('Validation Error'); }

// //   return this.findOne({ email })
// //     .then(user => {
// //       if (!user) { throw new Error('User Not Found'); }
// //       console.log('Welcome Back', user.username);
// //       return user;
// //     })
// //     .catch( () => {
// //       console.log('Creating new user');
// //       let username = email;
// //       let password = 'none';
// //       return this.create({ username, password, email });
// //     });

// // };

// // users.statics.decode = function(token) {
// //   let decoded = jwt_decode(token);
// //   return decoded;
// // };

// // users.statics.authenticator = function(auth) {
// //   // let query = { username: auth.username };
// //   return this.findOne({ username: auth.username })
// //     .then(user => {
// //       console.log('user', user);
// //       return user.passwordComparator(auth.password);
// //     })
// //     .catch(console.error);
// // };

// // users.methods.passwordComparator = function(pass) {
// //   return bcrypt.compare(pass, this.password)
// //     .then(valid => {
// //       // console.log(this)
// //       return valid ? this : null;
// //     })
// //     .catch(console.error);
// // };

// // users.statics.siginTokenGenerator = function(user) {
// //   console.log('token');
// //   let token = {
// //     id: user._id,
// //     username: user.username,
// //     email: user.email,
// //   };
// //   return jwt.sign(token, SECRET);
// // };
// // users.methods.signupTokenGenerator = function(user) {
// //   let token = {
// //     id: user._id,
// //     username: user.username,
// //     email: user.email,
// //   };
// //   return jwt.sign(token, SECRET);
// // };

// // users.statics.authenticateToken = async function(token) {
 
// //   try {
// //     let tokenObject = jwt.verify(token, SECRET);
// //     if (tokenObject.username) {
// //       return Promise.resolve(tokenObject.username);
// //     } else {
// //       return Promise.reject();
// //     }
// //   } catch (e) {
// //     return Promise.reject();
// //   }
// // };




// module.exports = mongoose.model('users', users);



'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const jwt_decode = require('jwt-decode');
let SECRET = 'cool mai' ;


const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } ,
  role: { type: String , required: true ,default:'guest', enum: ['admin' , 'guest' , 'user'] } ,
  
});

users.statics.checkCpabilities = (capability , role) =>{

  console.log('capability inside checkcapabilites' , capability);
  console.log('role  inside checkcapabilites ' , role);
  let admin = [ 'read' , 'create' , 'update' , 'delete'];
  let user = ['read' , 'create'];
  let guest = ['read'];

  if(role === 'admin'){
    for(let i= 0 ; i< admin.length ; i++){
      if(admin[i] === capability) return true ; 
    }
  }
  if(role === 'user'){
    for(let i= 0 ; i< user.length ; i++){
      if( user[i] === capability ) return true ;
    }
  }
  if ( role === 'guest'){
    for(let i = 0 ; i <guest.length ; i++){
      if(guest[i] === capability)  return true ;
    }
  }
};


users.statics.authenticateBasic = async function(user , password){

  let foundUser = await this.find({username: user});
  

  if (foundUser) {
    let valid = 
    bcrypt.compare(password, foundUser[0].password);
    return valid ? foundUser[0] : Promise.reject();
  }
  else {
    Promise.reject();
  }
} ;



//////// bearer auth /////
users.statics.authbearerToken = async function(token){
  try{
    let tokenObject = await jwt.verify(token , SECRET);
  
if(tokenObject){
  return Promise.resolve(tokenObject)
} else{
  return Promise.reject()
}
  
  }catch(err){
    console.log(err);
  }

}; 

//   Method to generate a Token following a valid login
users.statics.generateToken = function(user) {
 
  let userInfo= {
    // id: user._id,
    username : this.username,
    password : this.password,
    role : this.role,
    }
  
  let token = jwt.sign( userInfo, SECRET);

  
  return token;
};

users.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 5);
  }
  return Promise.reject();
});

users.statics.createFromOauth = function (email) {
  if (!email) { return Promise.reject('Validation Error'); }

  return this.findOne({ email })
    .then(user => {
      if (!user) { throw new Error('User Not Found'); }
      console.log('Welcome Back', user.username);
      return user;
    })
    .catch(error => {
      console.log('Creating new user');
      let username = email;
      let password = 'none';
      return this.create({ username, password, email });
    });

};

users.statics.decode = function (token) {
  let decoded = jwt_decode(token);
  return decoded;
};

users.statics.authenticator = function (auth) {
  let query = { username: auth.username };
  return this.findOne(query)
    .then(user => {
    console.log('here',user);

      return user.passwordComparator(auth.password);
    })
    .catch(console.error);
};

users.methods.passwordComparator = function (pass) {
  return bcrypt.compare(pass, this.password)
    .then(valid => {
      return valid ? this : null;
    })
    .catch(console.error);
};

users.statics.siginTokenGenerator = function (user) {
  let token = {
    id: user._id,
    username: user.username,
    email: user.email,
  };
  return jwt.sign(token, SECRET);
};
users.methods.signupTokenGenerator = function (user) {
  console.log('user.js')
  let token = {
    id: user._id,
    username: user.username,
    email: user.email,
  };
  console.log('token',token);
  
  return jwt.sign(token, SECRET);
};

users.statics.authenticateToken = async function (token) {
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


module.exports = mongoose.model('users', users);