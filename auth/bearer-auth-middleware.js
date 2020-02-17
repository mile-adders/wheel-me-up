  // 'use strict';

  // const Users = require('./users.js');

  // module.exports = (req, res, next) => {
  //   if (!req.headers.authorization) { next('invalid login'); }

  //   let token = req.headers.authorization.split(' ').pop();

  //   Users.authenticateToken(token)
  //     .then(validUser => {
  //       req.user = validUser;
  //       next();
  //     }).catch(err => next(err));
  // };



  ///////////////////////google 


  'use strict';

  const Users = require('./users.js');

  module.exports = (req, res, next) => {
      if (!req.headers.authorization) { next('Nope'); }

      let token = req.headers.authorization.split(' ').pop();
      Users.authenticateToken(token)
          .then(validUser => {
              console.log('sss', validUser);
              req.user = validUser;
              next();
          })
          .catch(e => next(e));
  };