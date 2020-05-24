const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('DB connnection successful!'));

const urlsaver = require('./urlsaver');
const exerciserecord = require('./exerciserecord');

module.exports = {
  urlsaver, exerciserecord,
};
