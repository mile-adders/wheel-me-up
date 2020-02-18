/* eslint-disable no-unused-vars */
'use strict';

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

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

module.exports = mongoose.model('users', users);
