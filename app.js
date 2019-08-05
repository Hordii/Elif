const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const db = require('./dbconf/db');
const hotDogRouter = require('./components/HotDog/route');
const cors = require('cors');
const serveStatic = require('serve-static')

const app = express();
app.use(serveStatic(__dirname+'dist'));


db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => console.log("Connect success"));

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', hotDogRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

module.exports = app;
