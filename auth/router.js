/* eslint-disable no-undef */
'use strict';

const superagent = require('superagent');
require('dotenv').config();

const express = require('express');
const authRouter = express.Router();

const User = require('../auth/Users-models.js');
const auth = require('../auth/middle-ware.js');
// const oauth = require('./oauth/google.js');
const oauth = require('./oauth/github.js');

const tokenServerUrl = process.env.tokenServerUrl;
const remoteAPI = process.env.remoteAPI;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const API_SERVER = process.env.API_SERVER;

// to take the user token and send it with request
module.exports = async function authorize(req, res, next) {
  try {
    let code = req.query.code;

    let remoteToken = await exchangeCodToken(code);

    let remoteUser = await getRemoteUserInfo(remoteToken);

    let [user, token] = await getUser(remoteUser);
    req.user = user;
    req.token = token;

    next();
  } catch (err) {
    next(err);
  }
};

//to genarate token and autharaizate 
async function exchangeCodToken(code) {
  let tokenResponse = await superagent.post(tokenServerUrl).send({
    code: code,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    redirect_uri: API_SERVER,
    grant_type: 'authorization_code',
  });

  let access_token = tokenResponse.body.access_token;
  return access_token;
}

// get the user info 
async function getRemoteUserInfo(token) {
  let userResponse = await superagent.get(remoteAPI)
    .set('user-agent', 'express-app')
    .set('Authorization', `token ${token}`);

  let user = userResponse.body;
  return user;
}

//to take the user record 
async function getUser(remoteUser) {
  let userRecord = {
    username: remoteUser.login,
    password: 'mynameissecret1992',
  };

  let user = await users.save(userRecord);
  let token = users.generateToken(user);

  return [user, token];
}



authRouter.post('/signup', (req, res, next) => {
  let user = new User(req.body);
  user.save()
    .then( async (user) => {
      req.token = await user.generateToken();
      req.user = user;
      res.set('token', req.token);
      res.send(req.token);
    })
    .then(() => {})
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
authRouter.post('/signin', auth(), (req, res, next) => {
  res.send(req.token);
});

authRouter.get('/oauth', (req,res,next) => {
  oauth.authorize(req)
    .then( token => {
      res.status(200).send(token);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
authRouter.post('/key', auth(), (req,res,next) => {
  req.user.generateKey()
    .then(key => {res.status(200).send(key); });
});

// eslint-disable-next-line no-unused-vars
authRouter.get('/public-stuff', (req, res, next) => {
  res.status(200).send('public stuff worked');
});

// eslint-disable-next-line no-unused-vars
authRouter.get('/hidden-stuff', auth(), (req, res, next) => {
  res.status(200).send('hidden stuff worked');
});

// eslint-disable-next-line no-unused-vars
authRouter.get('/to-read', auth('read'), (req, res, next) => {
  res.status(200).send('read stuff worked');
});

// eslint-disable-next-line no-unused-vars
authRouter.post('/create-a-result', auth('create'), (req, res, next) => {
  res.status(200).send('create a thing worked');
});

// eslint-disable-next-line no-unused-vars
authRouter.put('/update', auth('update'), (req, res, next) => {
  res.status(200).send('update worked');
});


// eslint-disable-next-line no-unused-vars
authRouter.delete('/bye', auth('delete'), (req, res, next) => {
  res.status(200).send('you delete a result ');
});

// eslint-disable-next-line no-unused-vars
authRouter.post('/router-get-everything', auth('superuser'), (req, res, next) => {
  res.status(200).send('router get everything thing worked, but it wont work');
});

module.exports = authRouter;