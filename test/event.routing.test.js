const express = require("express");
const supertest = require("supertest");
const bodyParser = require("body-parser");
const ajv = new require("ajv")();
const router = require("../web/routing/event.router");
const schema = require("../docs/schemas/event.scheme");

let app;

beforeEach(() => {
  app = express();
  app.use(bodyParser.json());
  router(app);
});

it("has api/event endpoint", async () => {
  const res = await supertest(app)
    .post("/api/event")
    .send({
      description: "",
      notification: false,
      time: "2019-04-07T00:00",
      title: ""
    })
    .set("Accept", "application/json")
    .expect("Content-Type", /json/)
    .expect(200);

  expect(res.body).toEqual({
    description: "",
    notification: false,
    time: "2019-04-07T00:00",
    title: ""
  });
});
