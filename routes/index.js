const express = require('express');

const app = express();

app.use('/api', require('./timestamp'));


module.exports = app;
