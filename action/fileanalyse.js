function fileanalyseHandler(req, res) {
  res.status(200).json({ name: req.files[0].originalname, type: req.files[0].mimetype, size: req.files[0].size });
}

module.exports = {
  fileanalyseHandler,
};
