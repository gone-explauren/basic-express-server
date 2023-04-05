'use strict';

const server = require('../../src/server.js');
const supertest = require('supertest');
const request = supertest(server.app);

const error404 = require('../../src/error-handlers/404.js')
const error500 = require('../../src/error-handlers/500.js')

describe('Testing the express server', () => {
  test('Should return a 404 on a bad route', async () => {
    // ./message is a bad route, as we do not have it listed
    const response = await request.get('/message');
    expect(response.status).toEqual(404);
    // expect(response.body).toEqual({});
  });
});

test('Should return a 404 on a bad method', async () => {
  // ./person is the proper route, but we are not using the post method
  const response = await request.post('/person');
  expect(response.status).toEqual(404);
  // expect(response.body).toEqual({});
});


test('Should return a 500 if no name is in the query string', async () => {
  // the route and the method are correct, but there is no name passed
  const response = await request.get('/person');
  expect(response.status).toEqual(500);
  // expect(response.body).toEqual({});
});


test('Should return a 200 if name is in the query string', async () => {
  // the route and the method are correct, name is passed
  const response = await request.get('/person?name=Laurel');
  expect(response.status).toEqual(200);
  expect(response.body).toEqual({ name: Laurel });
});
