const createError = require('http-errors');
const express = require('express');

const indexRouter = require('./routes/index');

const cors = require('cors');

const app = express();

app.use(cors())
app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

module.exports = app;