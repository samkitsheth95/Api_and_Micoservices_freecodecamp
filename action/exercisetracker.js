/* eslint-disable no-underscore-dangle */
const { exerciserecord } = require('../model/index');

function newUserHandler(req, res) {
  exerciserecord.create({ ...req.body }).then((result) => {
    res.status(200).json({ username: result.username, _id: result._id });
  }).catch(() => {
    res.status(400).send('username already taken');
  });
}

function addExerciseHandler(req, res) {
  const _id = req.body.userId;
  const update = {
    description: req.body.description,
    duration: Number(req.body.duration),
    date: (req.body.date ? new Date(req.body.date) : new Date()),
  };
  exerciserecord.findOneAndUpdate({ _id }, {
    $push: { exercise: update },
  }, {
    new: true,
  }).then((result) => {
    res.status(200).json({
      username: result.username,
      _id: result._id,
      ...update,
      date: update.date.toDateString(),
    });
  }).catch(() => {
    res.status(400).send('unknown _id');
  });
}

function getExerciseHandler(req, res) {
  const start = (req.query.from ? new Date(req.query.from) : new Date('1970-01-01'));
  const end = (req.query.to ? new Date(req.query.to) : new Date());
  exerciserecord.findOne({
    _id: req.query.userId,
    exercise: {
      $elemMatch: {
        date: { $gte: start, $lt: end },
      },
    },
  }).then((result) => {
    const count = (req.query.limit ? Number(req.query.limit) : result.exercise.length);
    const log = [];
    for (let i = 0; i < count; i += 1) {
      log.push({
        description: result.exercise[i].description,
        duration: result.exercise[i].duration,
        date: result.exercise[i].date.toDateString(),
      });
    }
    const finalResult = {
      ...req.query,
      count,
      log,
      username: result.username,
      _id: result._id,
    };
    delete finalResult.limit;
    delete finalResult.userId;
    res.status(200).json(finalResult);
  }).catch(() => {
    res.status(400).send('unknown _id');
  });
}

module.exports = {
  newUserHandler,
  addExerciseHandler,
  getExerciseHandler,
};
