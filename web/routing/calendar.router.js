const express = require("express");
const router = express.Router();

router.get("/api/calendar", (req, res) => {
  res.status(200).json({
    data: [
      {
        date: "2019-01-01",
        events: [
          {
            id: "id",
            title: "title"
          }
        ]
      }
    ]
  });
});

module.exports = app => {
  app.use(router);
};
