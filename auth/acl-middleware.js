'use strict';

const users = require('./users.js');

module.exports = (capability) => {

  return (req, res, next) => {

    try{

      if (users.checkCpabilities(capability, req.user.role)) {
        next();
      } else {
        next('Access Denied');


      }
    }catch (e) {
      console.log(e);

    }
  };

};