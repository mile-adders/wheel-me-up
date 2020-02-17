/* eslint-disable no-undef */
'use strict';

const base64 = require('base-64');
const users = require('../auth/Users-models.js');
// const jwt = require('jsonwebtoken');
// let SECRET='cool mai';

module.exports = (req, res, next) => {

  if(!req.headers.authorization) { next('invalid login'); return; }

  //   split the username and passowred from the header
  let basic = req.headers.authorization.split(' ').pop();
  //   let basic = req.headers.authorization.split(' : ')[1]
  // console.log('basic', basic)



  // split username and password from each other 
  let [user, password] = base64.decode(basic).split(':');
  // console.log('[user, pass] ', [user,password])


  users.authenticateBasic(user, password)
  // console.log('[user, pass] after use', [user,password])
    .then(validUser => {
      // console.log('validUser', validUser);
      req.token = users.generateToken(validUser);
      // console.log('token:', req.token);
      next();
    })
    .catch( err => next('invalid login2'));
};




//////////////////////// obada work ///////////////////////////////////////
// const User = require('../auth/Users-models.js');

// module.exports = (required_capability) => {
//   console.log('\n\n\n inside required_capability\n', required_capability, '\n\n\n');


//   return (req, res, next) => {

//     try {
//       let [authType, authString] = req.headers.authorization.split(/\s+/);
//       // slog.log('middleware called headers: ', req.headers.authorization);
//       console.log('\n\n\n inside Middleware,authstring()\n', authString, '\n\n\n');
//       switch (authType.toLowerCase()) {
//       case 'basic':
//         return    (authString);
//       case 'bearer':
//         return _authBearer(authString);
//       default:
//         return _authError();
//       }
//     } catch (e) {
//       console.log('\n\n\n inside required_capability error\n', e, '\n\n\n');
//       _authError();
//     }
//   };

//   function _authBasic(str) {

//     let base64Buffer = Buffer.from(str, 'base-64');
//     let bufferString = base64Buffer.toString();
//     let [username, password] = bufferString.split(':');
//     let auth = { username, password };
//     // slog.log('auth basic username pass: ', auth);

//     return User.authenticateBasic(auth)
//       .then(user => _authenticate(user))
//       .then(() => { })
//       .catch(_authError);
//   }

//   function _authBearer(authString) {
//     return User.authenticateToken(authString)
//       .then(user => _authenticate(user))
//       .then(() => { })
//       .catch(_authError);
//   }

//   async function _authenticate(user) {
//     // slog.log('authenticate basic called with user: ', user);

//     if (user) {
//       let user_has_capability = false;
//       if (!required_capability) {
//         user_has_capability = true;
//       } else {
//         //required capability
//         user_has_capability = await user.can(required_capability);
//       }
//       if (user_has_capability) {
//         req.user = user;
//         req.token = await user.generateToken();
//         next();
//       } else {
//         _authError();
//       }
//     }
//     else {
//       _authError();
//     }
//   }

//   function _authError() {
//     next('Invalid User ID/Password');
//   }

// };