'use strict'

// notes:
// server handles express

const express = require('express');
const app = express();
const cors = require('cors');

const logger = require('./middleware/logger.js')
const getName = require('./middleware/validator.js')

const error404 = require('.error-handlers/404.js')
const error500 = require('.error-handlers/500.js')

// every req that comes in will go through the middleware (cors first, then logger)
// app.use(cors);

// application level (this runs no matter which route is being used in the request)
app.use(logger);

app.get('/person', getName, (req, res, next) => {
	res.status(200).json({ name: req.query.name });
});

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  }),
};
