const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // eslint-disable-next-line no-console
  .then(() => console.log('DB connnection successful!'));

const urlsaver = require('./urlsaver');

module.exports = {
  urlsaver,
};
