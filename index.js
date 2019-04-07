const express = require("express");
const path = require("path");
// configuration
require("dotenv").config({ path: path.join(__dirname, "config", "app.env") });

const app = express();

require("./web/routing/base.router")(app);
require("./web/routing/calendar.router")(app);

app.listen(process.env.PORT, err => {
  if (err) {
    console.error("Server running error");
  }
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});
