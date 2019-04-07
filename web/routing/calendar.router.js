const express = require("express");
const router = express.Router();
const buildCalendar = require("../helpers/buildCalendar");
const getMonth = require("../helpers/getMonth");

router.get("/api/calendar", (req, res) => {
  res.status(200).json({
    data: buildCalendar(getMonth(req))
  });
});

module.exports = app => {
  app.use(router);
};
