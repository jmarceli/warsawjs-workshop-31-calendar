const express = require('express');
const path = require('path');
// configuration
require('dotenv').config({ path: path.join(__dirname, 'config', 'app.env') });

const app = express();


app.listen(process.env.PORT, () => {
  console.log(`Server listening at http://localhost:${process.env.PORT}`);
});

