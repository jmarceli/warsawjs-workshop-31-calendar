const express = require("express");
const supertest = require("supertest");
const router = require("../web/routing/day.router");
const schema = require("../docs/schemas/day.scheme");
const db = require("../db");
const EventModel = require("../models/event.model");
const ajv = new require("ajv")();

let app;

describe("day.routing", () => {
  beforeAll(async () => {
    app = express();
    router(app);
    await db.connect();
    await EventModel.deleteMany();
    const event = new EventModel({
      description: "Desc",
      notification: false,
      time: "2019-03-11T13:30",
      title: "Event title"
    });
    await event.save();
    const event2 = new EventModel({
      description: "Desc",
      notification: false,
      time: "2019-03-11T14:30",
      title: "Event title"
    });
    await event2.save();
  });

  afterAll(async () => {
    await EventModel.deleteMany();
  });

  it("has api/day endpoint", async () => {
    const res = await supertest(app)
      .get("/api/day?date=2019-03-11")
      .expect(200);
  });

  it("responds with expect data for given date (2019-03-11)", async () => {
    const validate = ajv.compile(schema);
    const res = await supertest(app).get("/api/day?date=2019-03-11");
    const valid = validate(res.body);
    expect(valid).toBe(true);
    expect(validate.errors).toBeNull();

    expect(res.body.data.length).toBe(2);
  });
});
