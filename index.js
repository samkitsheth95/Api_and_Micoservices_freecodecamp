const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const app = express();


dotenv.config();
const port = process.env.PORT || 3000;
app.use(cors({ optionSuccessStatus: 200 }));

app.use(require('./routes'));

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
