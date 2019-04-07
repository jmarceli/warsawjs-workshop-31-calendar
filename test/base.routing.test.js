const express = require("express");
const supertest = require("supertest");
const router = require("../web/routing/base.router");

let app;

beforeAll(() => {
  app = express();
  router(app);
});

it("has / endpoint", async () => {
  const res = await supertest(app)
    .get("/")
    .expect(200);
  expect(res.body.status).toEqual("ok");
});

it("no api/ endpoint", async () => {
  await supertest(app)
    .get("/api")
    .expect(404);
});
