const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var cors = require('cors')
const analytes = require('./routes/analytes');


const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/v1/analytes', analytes);

module.exports = app;
