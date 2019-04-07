const express = require("express");
const router = express.Router();

router.post("/api/event", (req, res) => {
  res.status(200).json(req.body);
});

module.exports = app => {
  app.use(router);
};
