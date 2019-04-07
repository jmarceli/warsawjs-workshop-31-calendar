const express = require("express");
const supertest = require("supertest");
const router = require("../web/routing/calendar.router");
const schema = require("../docs/schemas/calendar.scheme");
const ajv = new require("ajv")();

let app;

beforeEach(() => {
  app = express();
  router(app);
});

it("has api/calendar endpoint", async () => {
  const res = await supertest(app)
    .get("/api/calendar?month=2019-03")
    .expect(200);
});

it("responds with expect data for given year and month (2019-03)", async () => {
  const validate = ajv.compile(schema);
  const res = await supertest(app).get("/api/calendar?month=2019-03");
  const valid = validate(res.body);
  expect(valid).toBe(true);
  expect(validate.errors).toBeNull();
});
