'use strict';

const users = require('./Users-models.js');

module.exports = (capability) => {
    // console.log('capability ......', capability);

    return (req, res, next) => {
        console.log('req.user inside acl ' , req.user);
        
        try{
        
        if (users.checkCpabilities(capability, req.user.capabilities)) {
            next();
        } else {
            next('Access Denied');


        }
        }catch (e) {
            Console.log(e)

      }
    };

};