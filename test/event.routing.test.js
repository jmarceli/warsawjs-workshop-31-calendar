const express = require("express");
const supertest = require("supertest");
const bodyParser = require("body-parser");
const ajv = new require("ajv")();
const db = require("../db");
const router = require("../web/routing/event.router");
const EventModel = require("../models/event.model");
const schema = require("../docs/schemas/event.scheme");
const validate = ajv.compile(schema);

let app;

describe("event.routing", () => {
  beforeAll(async () => {
    app = express();
    app.use(bodyParser.json());
    router(app);
    await db.connect();
    await EventModel.deleteMany();
  });

  afterAll(async () => {
    await EventModel.deleteMany();
  });

  it("has api/event endpoint which creates an event", async () => {
    const initNumberOfDocs = await EventModel.countDocuments();
    const res = await supertest(app)
      .post("/api/event")
      .send({
        description: "Desc",
        notification: false,
        time: "2019-04-07T00:00",
        title: "Event title"
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);

    const valid = validate(res.body);
    expect(valid).toBe(true);
    expect(validate.errors).toBeNull();

    const docInDb = await EventModel.findOne({ _id: res.body.id });
    expect(docInDb._id.toString()).toBe(res.body.id);
    expect(docInDb.description).toBe("Desc");
    expect(docInDb.title).toBe("Event title");

    const numberOfDocs = await EventModel.countDocuments();
    expect(initNumberOfDocs + 1).toBe(numberOfDocs);
  });
});
