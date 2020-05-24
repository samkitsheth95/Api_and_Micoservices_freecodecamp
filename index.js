const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

dotenv.config();
const port = process.env.PORT || 3000;
app.use(cors({ optionSuccessStatus: 200 }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer().any());
app.use('/public', express.static(`${process.cwd()}/public`));

app.use(require('./routes'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
