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
    .get("/api/calendar")
    .expect(200);
});

it("respond with expect data", async () => {
  const validate = ajv.compile(schema);
  const res = await supertest(app).get("/api/calendar");
  const valid = validate(res.body);
  expect(valid).toBe(true);
  expect(validate.errors).toBeNull();
});
