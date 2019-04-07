const dayjs = require("dayjs");

const getMonth = req => {
  if (!req.query.month) {
    console.log(req.query);
    console.error("No month query param in POST request");
  }
  return dayjs(`${req.query.month}-01`).month();
};

module.exports = getMonth;
