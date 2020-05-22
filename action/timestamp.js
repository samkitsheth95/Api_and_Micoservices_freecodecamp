function timestampHandler(req, res) {
  let date = new Date(req.params['0']);
  if (date.toString() !== 'Invalid Date') {
    res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
  } else if (Number(req.params['0'])) {
    date = new Date(Number(req.params['0']));
    res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
  } else if (req.params['0'] === '') {
    date = new Date();
    res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
  } else {
    res.status(200).json({ error: 'Invalid Date' });
  }
}

module.exports = {
  timestampHandler,
};
