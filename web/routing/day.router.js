const express = require("express");
const router = express.Router();
const buildCalendar = require("../helpers/buildCalendar");
const getMonth = require("../helpers/getMonth");
const EventModel = require("../../models/event.model");
const dayjs = require("dayjs");

router.get("/api/day", async (req, res) => {
  const query = {
    time: {
      $regex: new RegExp(dayjs(req.query.date).format("YYYY-MM-DD"), "i")
    }
  };
  const docsInDb = await EventModel.find(query);
  const data = docsInDb.map(doc => ({ ...doc.toObject(), id: doc._id }));

  res.status(200).json({
    data
  });
});

module.exports = app => {
  app.use(router);
};
