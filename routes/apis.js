const express = require('express');

const app = express();

const { timestampHandler } = require('../action/timestamp');
const { whoamiHandler } = require('../action/whoami');

app.get('/timestamp*', timestampHandler);
app.get('/whoami', whoamiHandler);

module.exports = app;
