'use strict';
require('dotenv').config();
const db = require('./app/db');
const express = require('express');
var bodyParser = require('body-parser')

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

db.migrate()
  .then()
  .catch()

// App
const app = express();
var cors = require('cors')
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
  console.log(process.env.DB_HOST)
  // res.status(200)
  res.send(' aaass: ');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:woiks`);
