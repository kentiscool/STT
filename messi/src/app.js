'use strict';
require('dotenv').config();
const db = require('./app/db');
const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

db.migrate()
  .then()
  .catch()

// App
const app = express();
app.get('/', (req, res) => {
  console.log(process.env.DB_HOST)
  // res.status(200)
  res.send(' aaass: ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:woiks`);
