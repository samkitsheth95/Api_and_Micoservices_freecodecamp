const express = require('express');

const app = express();

const { getOriginalUrlHandler } = require('../action/urlshortner');

app.get('/', (req, res) => {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

app.use('/api', require('./apis'));

app.get(/[a-zA-Z0-9]{8}$/, getOriginalUrlHandler);

module.exports = app;
