function whoamiHandler(req, res) {
  res.status(200).json({ ipaddress: req.headers.host, language: req.headers['accept-language'], software: req.headers['user-agent'] });
}

module.exports = {
  whoamiHandler,
};
