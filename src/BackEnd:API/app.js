const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const main = require('./main/router');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(cors());

app.use(express.static('public'));

app.use('/api' , main);
app.get('/' , (req, res, next) => { res.send("Funcionando Perfeitamente") });

module.exports = app;
