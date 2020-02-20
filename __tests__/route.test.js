'use strict';

const routes = require('../api-routes/api-routes.js');
const supergoose = require('@code-fellows/supergoose');
const basicAuth = require('../auth/basic-auth-middleware.js');
const {server} = require('../auth/server.js')
const mockRequest = supergoose(server);
const jwt = require('jsonwebtoken');
process.env.SECRET='secret';

const base64 = require('base-64');

// describe('API routes', () => {
//   it('POST to /car-company  to create a new car to be rented ', () => {
//     // let test = {'name': 'BMW'};
//     return mockRequest
//       .get('/users')
//       .then( data => {
//         console.log('data.headers', data.status)
//         expect(typeof(data)).toBe('object');
//         expect(data.status).toEqual(200);
//       });
//   });

//   // it('POST to /signin to login to an existing user', () => {
//   //   // let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
//   //   return mockRequest
//   //     .post('/signin')
//   //     .then( data => {
//   //       // expect(data.text).toEqual(base64.encode(test.password));
//   //       expect(data.status).toEqual(200);
//   //     });
//   // });
// });

let users = {
  admin: {username: 'admin', password: 'password', role: 'admin'},
  editor: {username: 'editor', password: 'password', role: 'editor'},
  user: {username: 'user', password: 'password', role: 'user'},
};

// beforeAll(supergoose.startDB);
// afterAll(supergoose.stopDB);

describe('Auth Router', () => {

  Object.keys(users).forEach( userType => {

    describe(`${userType} users`, () => {

      let id;
      let token;
      let resultsToken;

      it('Can create user', () => {
        return mockRequest.post('/signup')
          .send(users[userType])
          .then(results => {
            console.log('result', results.text);
            resultsToken = results.text
          // })
            .then(data => {
              // console.log('result222222222222' , results)
              console.log('data', data);
            token = jwt.verify(results.text, process.env.SECRET);
            id = token.id;
            expect(token.id).toEqual(id);
             })
          });
      });
    });
  });

});

// api route
// signin
// sign up 

//user 
//guest
// admin