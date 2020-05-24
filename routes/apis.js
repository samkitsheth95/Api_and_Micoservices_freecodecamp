const express = require('express');

const app = express();

const { timeStampHandler } = require('../action/timestamp');
const { whoAmIHandler } = require('../action/whoami');
const { urlShortnerCreatorHandler } = require('../action/urlshortner');
const { fileAnalyseHandler } = require('../action/fileanalyse');
const {
  newUserHandler,
  addExerciseHandler,
  getExerciseHandler,
  getUsersHandler,
} = require('../action/exercisetracker');

app.get('/timestamp*', timeStampHandler);
app.get('/whoami', whoAmIHandler);
app.get('/shorturl/new(*)', urlShortnerCreatorHandler);
app.post('/fileanalyse', fileAnalyseHandler);
app.post('/exercise/new-user', newUserHandler);
app.post('/exercise/add', addExerciseHandler);
app.get('/exercise/log', getExerciseHandler);
app.get('/exercise/users', getUsersHandler);

module.exports = app;
