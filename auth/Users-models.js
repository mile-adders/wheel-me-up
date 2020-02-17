/* eslint-disable no-unused-vars */
'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

let SECRET = 'cool mai' ;


const users = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true } ,
  role: { type: String , required: true , enum: ['car_company' , 'guest' , 'car_user'] } ,
  
});

users.statics.checkCpabilities = (capability , role) =>{
  console.log('capability inside checkcapabilites' , capability);
  console.log('role  inside checkcapabilites ' , role);
  let car_company = [ 'read' , 'create' , 'update' , 'delete'];
  let car_user = ['read' , 'create'];
  let guest = ['read'];

  if(role === 'car_company'){
    for(let i= 0 ; i< car_company.length ; i++){
      if(car_company[i] === role) return true ; 
    }
  }
  if(role === 'car_user'){
    for(let i= 0 ; i< car_user.length ; i++){
      if( car_user[i] === role ) return true ;
    }
  }
  if ( role === 'Guest'){
    for(let i = 0 ; i <guest.length ; i++){
      if(guest[i] === role)  return true ;
    }
  }
};


users.statics.authenticateBasic = async function(user , password){
  // console.log ('user', user)
//   console.log('passward', password)
  let foundUser = await this.find({username: user});
  // foundUser = await this.find(user);
  console.log('foundUser', foundUser);

  if (foundUser) {
    let valid = 
    bcrypt.compare(password, foundUser[0].password);
    // console.log('gggggggggg',foundUser[0],'ffffffff',valid);
    return valid ? foundUser[0] : Promise.reject();
  }
  else {
    Promise.reject();
  }
} ;



//////// bearer auth /////
users.statics.authbearerToken = async function(token){
  // console.log('token inside authbearerToken' , token);
  try{
    let tokenObject = await jwt.verify(token , SECRET);
    // console.log('token onjext inside try' , tokenObject);
    // console.log('token', token);
    // return this.findOne({id:tokenObject._id});
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
  // console.log('user', user);

  // let userInfo ={
  //   id: this._id ,
  //   capabilities: this.role ,
  // };
  let userInfo= {
    id: user._id,
    username : user.username,
    password : user.password,
    role : user.role,
    }
  
  let token = jwt.sign( userInfo, SECRET);

  // console.log('token', token);
  // let token = jwt.sign({ username: user.username}, SECRET);
  //
  return token;
};

module.exports = mongoose.model('users', users);

// //////////////// obada work ////////////////
// const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// // eslint-disable-next-line no-unused-vars
// const RolesModel = require('./roles-model.js');
// // const slog = require('../mileadder-logging.js.js/index.js');

// const SINGLE_USE_TOKENS = !!process.env.SINGLE_USE_TOKENS;
// const TOKEN_EXPIRE = process.env.TOKEN_LIFETIME || '5m';
// const SECRET = process.env.SECRET || 'mynameissecret';

// const usedTokens = new Set();

// const usersSchema = new mongoose.Schema({
//   username: {type:String, required:true, unique:true},
//   password: {type:String, required:true},
//   email: {type: String},
//   role: {type: String, default:'user', enum: ['admin','editor','user']},
  
// }, {
//   toObject: { virtuals: true },
//   toJSON: { virtuals: true },
// });

// usersSchema.virtual('role_doc', {
//     ref: 'roles',
//     localField: 'role',
//     foreignField: 'role',
//     justOne: true,
// });

// check and decrypt the user password 
// usersSchema.pre('save', async function() {
//     if (this.isModified('password'))
//   {
//       this.password = await bcrypt.hash(this.password, 5);
//     }
// });


// usersSchema.statics.createFromOauth = function(email) {
    
//     if(! email) { return Promise.reject('Validation Error'); }
    
//     return this.findOne( {email} )
//     .then(user => {
//         if( !user ) { throw new Error('User Not Found'); }
//         return user;
//     })
//     // eslint-disable-next-line no-unused-vars
//     .catch( error => {
//         let username = email;
//         let password = 'none';
//         return this.create({username, password, email});
//     });
    
// };

// to verify the user 
// usersSchema.statics.authenticateToken = function(token) {
    
//     if ( usedTokens.has(token ) ) {
//     return Promise.reject('Invalid Token');
// }

//   try {
//       let parsedToken = jwt.verify(token, SECRET);
//       (SINGLE_USE_TOKENS) && parsedToken.type !== 'key' && usedTokens.add(token);
//       let query = {_id: parsedToken.id};
//       return this.findOne(query);
//     } catch(e) { throw new Error('Invalid Token'); }
    
// };

// usersSchema.statics.authenticateBasic = function(auth) {
//   let query = {username:auth.username};
//   return this.findOne(query)
//   .then( user => user && user.comparePassword(auth.password) )
//   .catch(error => {throw error;});
// };

// usersSchema.methods.comparePassword = function(password) {
//     console.log('PASSWORD HASH', password, this.password);
//     return bcrypt.compare( password, this.password )
//     .then( valid => valid ? this : null);
// };


// usersSchema.methods.generateToken = async function(type) {
//     // slog.log('Generating token for user with type: ', type);
//     // const role = await this.getRole();
//   let token = {
//       id: this._id,
//     // capabilities: role.capabilities,
//     // type: type || 'user',
// };

// // let options = {};
// // if ( type !== 'key' && !! TOKEN_EXPIRE ) {
// //     options = { expiresIn: TOKEN_EXPIRE };
// // }

// return jwt.sign(token, SECRET);
// };

// usersSchema.methods.can = async function(capability) {
//     const role = await this.getRole();
//     return role.capabilities.includes(capability);
// };


// usersSchema.methods.getRole = async function() {
//     const user = await this.populate('role_doc').execPopulate();
//     console.log('Populated user with roles: ', user);
//     const role = user.role_doc;
//     if(role === null) {
//         throw new Error('invalid role for user ' + user.username);
//     }
//     return role;
// };


// usersSchema.methods.generateKey = async function() {
//     return await this.generateToken('key');
// };

// module.exports = mongoose.model('users', usersSchema);



