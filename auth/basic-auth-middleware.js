// /* eslint-disable no-unused-vars */
// 'use strict';

// const base64 = require('base-64');
// const Users = require('../auth/users.js');

// module.exports = (req, res, next) => {

//   let [authType, encodedString] = req.headers.authorization.split(/\s+/);

//   switch(authType.toLowerCase()) {
//   case 'basic':
//     return authBasic(encodedString);
//   default:
//     break;
//   }

//   function authBasic(authString) {

//     let base64Buffer = Buffer.from(authString,'base64');
//     let bufferString = base64Buffer.toString();
//     let [username,password] = bufferString.split(':');
//     let auth = {username,password};

//     return Users.authenticateBasic(auth)
//       .then( user =>{
//         console.log(user);
//         req.user = user;
//         req.token = user.generateToken(user);
//         next();
//       });
//   }
// };


/////////////google///////////

'use strict';

const base64 = require('base-64');
const user = require('./users.js');

module.exports = (req, res, next) => {
    if (!req.headers.authorization) {
        next('Ops something went wrong');
        return;
    }

    let basic = req.headers.authorization.split(' ').pop();
    let [username, password] = base64.decode(basic).split(':');
    let auth = { username, password };

    let validUser = user.authenticator(auth);
    ////// we don`t need a promise function here not everything needs (promise func.) i don`t know ask js the stubid language ever
    // .then(validUser => {
    console.log(validUser);
    req.token = user.siginTokenGenerator(validUser);
    console.log(req.token);
    next();
    // })
    // .catch(() => next('Ops'));
};