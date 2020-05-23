const crypto = require('crypto');
const { urlsaver } = require('../model/index');

const urlValidRegex = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

async function genEntry() {
  try {
    const shorturl = process.env.HOST + crypto.randomBytes(4).toString('hex');
    const res = await urlsaver.find({ shortUrl: shorturl });
    if (res.length === 0) { return shorturl; } return genEntry();
  } catch (err) {
    return 'abc';
  }
}

async function urlshortnercreatorHandler(req, res) {
  try {
    const originalUrl = req.params['0'].substring(4);
    const shortUrl = await genEntry();
    if (urlValidRegex.test(originalUrl)) {
      urlsaver.create({ originalUrl, shortUrl }).then(() => {
        res.status(200).json({ originalUrl, shortUrl });
      });
    } else {
      res.status(400).json({ error: 'invalid URL' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Crash' });
  }
}

async function getoriginalurlHandler(req, res) {
  try {
    const result = await urlsaver.findOne({ shortUrl: 'http://localhost:3000/f8472e17' });
    res.redirect(result.originalUrl);
  } catch (err) {
    res.status(500).json({ error: 'Crash' });
  }
}

module.exports = {
  urlshortnercreatorHandler, getoriginalurlHandler,
};
