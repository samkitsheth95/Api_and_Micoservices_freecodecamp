const express = require('express');

const app = express();

const {
  timestampHandler,
} = require('../action/timestamp');

app.get('/timestamp/*', timestampHandler);

module.exports = app;
