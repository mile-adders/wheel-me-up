'use strict'; 

const notFound = require('../middleware/404.js');
const error = require('../middleware/500.js');

const supergoose = require('@code-fellows/supergoose');

const notfoundMockRequest = supergoose(notFound);
const errorMockRequest = supergoose(error);

describe('Middleware tests', () => {

  it('Middleware responds with 404 in case of not found route', ()=> {
    return notfoundMockRequest
      .get('/happiness')
      .then(data => {
        expect(data.status).toBe(404);
      }).catch(console.error);
  });

  it('Middleware responds with 500 in case on an error', ()=> {
    return errorMockRequest
      .get('/error')
      .then(data => {
        expect(data.status).toBe(500);
      }).catch(console.error);
  });
  
});

