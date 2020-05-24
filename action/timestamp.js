function timeStampHandler(req, res) {
  const param = req.params['0'].substring(1) || '';
  let date = new Date(param);
  if (date.toString() !== 'Invalid Date') {
    res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
  } else if (Number(param)) {
    date = new Date(Number(param));
    res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
  } else if (param === '') {
    date = new Date();
    res.status(200).json({ unix: date.getTime(), utc: date.toUTCString() });
  } else {
    res.status(200).json({ error: 'Invalid Date' });
  }
}

module.exports = {
  timeStampHandler,
};
