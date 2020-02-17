// /* eslint-disable camelcase */
// /* eslint-disable strict */
// 'use strict';

// const superagent = require('superagent');
// const Users = require('./users.js');

// const tokenUrl = process.env.tokenServerUrl;
// const remoteAPI = process.env.remoteAPI;
// const CLIENT_ID = process.env.CLIENT_ID;
// const CLIENT_SECRET = process.env.CLIENT_SECRET;
// const API_SERVER = process.env.API_SERVER;

// module.exports = async function authorize(req, res, next) {
//   try {
//     console.log('first');
//     let code = req.query.code;
//     let remoteToken = await exchangeCodeForToken(code);
//     let remoteUser = await getRemoteUserInfo(remoteToken);
//     let [user, token] = await getUser(remoteUser);
//     req.user = user;
//     req.token = token;
//     next();
//   } catch(err) {
//     next(err);
//   }
// };

// async function exchangeCodeForToken(code) {
//   console.log('exchangeCodeForToken');
//   let tokenResponse = await superagent.post(tokenUrl).send({
//     code: code,
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     redirect_uri: API_SERVER,
//     grant_type: 'authorization_code',
//   });
//   console.log('exchangeCodeForToken', tokenResponse.body);
//   let access_token = tokenResponse.body.access_token;
//   return access_token;
// }

// async function getRemoteUserInfo(token) {
//   let userResponse = await superagent.get(remoteAPI)
//     .set('user-agent', 'express-app')
//     .set('Authorization', `token ${token}`);
//   // console.log('obada', userResponse.body);
//   let user = userResponse.body;
//   return user;
// }

// async function getUser(remoteUser) {
//   let userRecord = {
//     username: remoteUser.login,
//     password: 'oauthpassword',
//   };
//   let newUser = new Users(userRecord);
//   let user = await newUser.save();
//   console.log('sss',user);
//   let token = await newUser.generateToken(user);

//   return [user, token];
// }   


//*///////////google //////// 
'use strict';

const superagent = require('superagent');

const Users = require('./users.js');

const GTS = 'https://www.googleapis.com/oauth2/v4/token';

module.exports = async function authorize(req, res, next) {
    try {
        let code = req.query.code;
        let access_token = await codeTokenExchanger(code);
        let remoteUser = await getRemoteUserInfo(access_token);
        let validUser = await getUser(remoteUser);
        let validToken = await getToken(validUser);
        req.user = { validUser, validToken };
        next();
    } catch (e) {
        next(e);
    }
};

async function codeTokenExchanger(code) {
    let tokenResponse = await superagent.post(GTS)
        .type('form')
        .send({
            code: code,
            client_id: '391464718561-oe4abkh0di65p5583ins87tsmrd1bvh2.apps.googleusercontent.com',
            client_secret: 'IgMnwkIUb324ij_pPlQNsWNb',
            redirect_uri: 'http://localhost:3000/oauthv2',
            grant_type: 'authorization_code',
        });
    console.log('tokenObject', tokenResponse.body);
    let access_token = tokenResponse.body.id_token;
    return access_token;
}

async function getRemoteUserInfo(token) {
    return await superagent
        .post(`https://www.googleapis.com/oauth2/v1/tokeninfo?id_token=${token}`)
        .then(data => {
            console.log('data', data.body);
            let user = Users.decode(token) || data.body;
            console.log('user', user);
            return user.email;
        });

}
async function getUser(oauthUser) {
    let user = await Users.createFromOauth(oauthUser);
    return user;
}

async function getToken(validUser) {
    let token = await Users.siginTokenGenerator(validUser);
    console.log('oauth', token)
    return token;
}