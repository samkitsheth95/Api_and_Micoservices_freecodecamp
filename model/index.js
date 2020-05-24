const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('DB connnection successful!'));

const urlSaver = require('./urlsaver');
const exerciseRecord = require('./exerciserecord');

module.exports = {
  urlSaver, exerciseRecord,
};
