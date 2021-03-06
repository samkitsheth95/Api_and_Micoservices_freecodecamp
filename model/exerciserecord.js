const mongoose = require('mongoose');

const { Schema } = mongoose;

const exerciseRecord = new Schema({
  username: { type: String, required: true, unique: true },
  exercise: [
    {
      description: String,
      duration: Number,
      date: Date,
    },
  ],
});

module.exports = mongoose.model('exerciseRecord', exerciseRecord);
