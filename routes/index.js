const express = require('express');

const app = express();

const { getoriginalurlHandler } = require('../action/urlshortner');

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.use('/api', require('./apis'));

app.get(/[a-zA-Z0-9]{8}$/, getoriginalurlHandler);

module.exports = app;
