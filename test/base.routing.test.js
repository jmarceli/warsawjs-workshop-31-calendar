const express = require('express');
const supertest = require('supertest');
const router = require('../web/routing/base.router');

it('works', async () => {
  const app = express();
  router(app);

  const res = await supertest(app).get('/').expect(200);
  expect(res.body.status).toEqual('ok');
});
