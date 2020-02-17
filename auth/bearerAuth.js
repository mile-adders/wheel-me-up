'use strict' ;
const users = require('./Users-models.js');

module.exports = (req , res , next) =>{
    // console.log('req.headers', req.headers);
    // console.log('req.headers.authorization' , req.headers.authorization);

    // let token ;

    if (!req.headers.authorization){(e) =>{console.log(e)}}
    // let token = req.token;
    // console.log('mai here inside if (req.token)' . req.token);

   let token = req.headers.authorization.split(' ').pop()


users.authbearerToken(token)
.then(validUser =>{
    console.log('validUser authbearer token' , validUser);
    req.user = validUser ;
    next();
}).catch(err => next(err));
};