const express = require('express');
const supertest = require('supertest');
const router = require('../web/routing/calendar.router');

let app;

beforeEach(() => {
  app = express();
  router(app);
});

it('has api/calendar endpoint', async () => {
  const res = await supertest(app).get('/api/calendar').expect(200);
  expect(res.body.status).toEqual('ok');
});
