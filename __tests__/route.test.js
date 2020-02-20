'use strict';

// const notFound = require('../middleware/404.js');
// const error = require('../middleware/500.js');
// const errorMockRequest = supergoose(error);
const routes = require('../api-routes/api-routes.js');
const supergoose = require('@code-fellows/supergoose');

// const mockRequest = supergoose(routes);
// const base64 = require('base-64');

describe('Routes tests', () => {
  it('POST to /signup to create a new user with a user capability', () => {
    // let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
    // return mockRequest
    //   .post('/signup')
    //   .then( data => {
    //     expect(data.text).toEqual(base64.encode(test.password));
    //     expect(data.status).toEqual(201);
  });
  it('POST to /signup to create a new user with admin capability', () => {
    // let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
    // return mockRequest
    //   .post('/signup')
    //   .then( data => {
    //     expect(data.text).toEqual(base64.encode(test.password));
    //     expect(data.status).toEqual(201);
  });
  it('POST to /signin to sign up an existing user with admin capability', () => {
    // let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
    // return mockRequest
    //   .post('/signup')
    //   .then( data => {
    //     expect(data.text).toEqual(base64.encode(test.password));
    //     expect(data.status).toEqual(201);
  });
  it('POST to /signin to login to an existing user', () => {
    // // let test = {'username': 'ahmadkhaleel96', 'password': 'Ahmad@$ 96 => INSTAcreative'};
    // return mockRequest
    //   .post('/signin')
    //   .then( data => {
    //     // expect(data.text).toEqual(base64.encode(test.password));
    //     expect(data.status).toEqual(200);
  });
  it('GET to /users will return a list for the entire database', () => {
      
  });
});
describe('API Routes Tests', () => {
   it('GET to /car-company returns the users With full READ capability', () => {

   });
   it('GET to /car-company/:_id will return a specific user with read capability', () => {

   });
   it('POST to /car-company Create a new car schema', () => {
      
  });
  it('POST to /car-company/:_id can create', () => {

  });
  it('POST to /car-company/:_id can delete', () => {

  });
});


describe('Middleware tests', () => {

  it('Middleware responds with 404 in case of not found route', ()=> {
    // return notfoundMockRequest
    //   .get('/happiness')
    //   .then(data => {
    //     expect(data.status).toBe(404);
    //   }).catch(console.error);
  });

  it('Middleware responds with 500 in case on an error', ()=> {
    // return errorMockRequest
    //   .get('/error')
    //   .then(data => {
    //     expect(data.status).toBe(500);
    //   }).catch(console.error);
  });
  
});