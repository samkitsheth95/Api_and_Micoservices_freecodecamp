const express = require('express');

const app = express();

const { timestampHandler } = require('../action/timestamp');
const { whoamiHandler } = require('../action/whoami');
const { urlshortnercreatorHandler } = require('../action/urlshortner');
const { fileanalyseHandler } = require('../action/fileanalyse');
const {
  newUserHandler,
  addExerciseHandler,
  getExerciseHandler,
  getUsersHandler,
} = require('../action/exercisetracker');

app.get('/timestamp*', timestampHandler);
app.get('/whoami', whoamiHandler);
app.get('/shorturl/new(*)', urlshortnercreatorHandler);
app.post('/fileanalyse', fileanalyseHandler);
app.post('/exercise/new-user', newUserHandler);
app.post('/exercise/add', addExerciseHandler);
app.get('/exercise/log', getExerciseHandler);
app.get('/exercise/users', getUsersHandler);

module.exports = app;
