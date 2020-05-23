const mongoose = require('mongoose');

const { Schema } = mongoose;

const urlsave = new Schema({
  originalUrl: { type: String, required: true },
  shortUrl: { type: String, required: true },
});

module.exports = mongoose.model('urlsaver', urlsave);
