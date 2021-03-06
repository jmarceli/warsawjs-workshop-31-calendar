const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const morgan = require("morgan");
// configuration
require("dotenv").config({ path: path.join(__dirname, "config", "app.env") });
const db = require("./db");

const app = express();

// parse application/json
app.use(bodyParser.json());
app.use(morgan("combined"));

require("./web/routing/base.router")(app);
require("./web/routing/calendar.router")(app);
require("./web/routing/event.router")(app);
require("./web/routing/day.router")(app);

(async () => {
  await db.connect();

  app.listen(process.env.PORT, err => {
    if (err) {
      console.error("Server running error");
    }
    console.log(`Server listening at http://localhost:${process.env.PORT}`);
  });
})();
