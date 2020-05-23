const express = require('express');

const app = express();

const { timestampHandler } = require('../action/timestamp');
const { whoamiHandler } = require('../action/whoami');
const { urlshortnercreatorHandler } = require('../action/urlshortner');

app.get('/timestamp*', timestampHandler);
app.get('/whoami', whoamiHandler);
app.get('/shorturl/new(*)', urlshortnercreatorHandler);


module.exports = app;
