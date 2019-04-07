const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req);
  res.status(200).json({ status: 'ok' });
  // res.json({ status: 'ok' });
});

module.exports = (app) => {
  app.use(router);
};
