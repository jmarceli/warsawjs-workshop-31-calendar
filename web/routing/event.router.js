const express = require("express");
const router = express.Router();
const EventModel = require("../../models/event.model");

router.post("/api/event", async (req, res) => {
  const model = new EventModel(req.body);
  const save = await model.save();
  res.status(200).json({ id: save._id });
});

module.exports = app => {
  app.use(router);
};
