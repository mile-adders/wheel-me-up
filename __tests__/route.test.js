'use strict';

const routes = require('../api-routes/api-routes.js');
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(routes);
const base64 = require('base-64');

describe('API routes', () => {
  it('POST to /signup to create a new user', () => {
    let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
    return mockRequest
      .post('/signup')
      .then( data => {
        expect(data.text).toEqual(base64.encode(test.password));
        expect(data.status).toEqual(201);
      });
  });

  it('POST to /signin to login to an existing user', () => {
    // let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
    return mockRequest
      .post('/signin')
      .then( data => {
        // expect(data.text).toEqual(base64.encode(test.password));
        expect(data.status).toEqual(200);
      });
  });
});

// api route
// signin
// sign up 

//user 
//guest
// admin