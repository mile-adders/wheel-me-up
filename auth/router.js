/* eslint-disable no-unused-vars */
'use strict';

const express = require('express');
const router = express.Router();
const bearerAuth = require('../auth/bearerAuth.js')
const basicAuth = require('./basicAuth.js/index.js');
const users = require('../auth/Users-models.js');


router.post('/signup', signUp);
router.post('/signin', basicAuth, signIn);
router.get('/user',basicAuth, getUsers); ///// not work yet 
router.get('/secret' , bearerAuth ,bearerRes);



//////////////////////// /sign up 
function signUp  (req, res , next){
  // console.log('req.body', req.body);
  new users(req.body).save()
  
  
    .then((user) => {
      // console.log('user')
      let token = users.generateToken();
      res.status(200).send(token);
    }).catch(err => console.error(err));
}


//////////////// sign in 
function signIn(req, res , next){
  res.status(200).send(req.token);
    
}

/////////////////// /user
function getUsers(req , res , next){
    
  users.find()
    .then(records =>{
      res.status(200).send(records );
    });   
}


////////////////// bearer res
function bearerRes(req , res){
  
  // console.log('req.user in the route', req.user);
  res.status(200).send(req.user);
} 


module.exports = router;/* eslint-disable no-undef */

