const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// configuration
require("dotenv").config({ path: path.join(__dirname, "config", "app.env") });

const app = express();

// parse application/json
app.use(bodyParser.json());

require("./web/routing/base.router")(app);
require("./web/routing/calendar.router")(app);
require("./web/routing/event.router")(app);

app.listen(process.env.PORT, err => {
  if (err) {
    console.error("Server running error");
  }
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
