const express = require("express");
const router = express.Router();
const EventModel = require("../../models/event.model");
const mongoose = require("mongoose");

router.post("/api/event", async (req, res) => {
  const model = new EventModel(req.body);
  const save = await model.save();
  res.status(200).json({ id: save._id });
});

router.delete("/api/event/:id", async (req, res) => {
  await EventModel.findOneAndDelete({
    _id: mongoose.Types.ObjectId(req.params.id)
  });
  res.status(200).json({ id: req.params.id });
});

router.put("/api/event/:id", async (req, res) => {
  await EventModel.updateOne(
    { _id: mongoose.Types.ObjectId(req.params.id) },
    req.body
  );
  res.status(200).json({ id: req.params.id });
});

module.exports = app => {
  app.use(router);
};
