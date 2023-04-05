'use strict'

// notes:
// server handles express

const express = require('express');
const app = express();
const cors = require('cors');

// for lab-03
// const router = require('./router.js');

// bring in middleware
const logger = require('./middleware/logger.js')
const getName = require('./middleware/validator.js')

// bring in error handlers
const error404 = require('./error-handlers/404.js')
const error500 = require('./error-handlers/500.js')

// every req that comes in will go through the middleware (cors first, then logger)
app.use(cors());

// allows json data to be sent and encoded
app.use(express.json());

// application level (this runs no matter which route is being used in the request)
app.use(logger);


// moved to lab-03
// any method can be used (get, post, put, patch, delete) as long as one isn't specified
// this is set up to use a specific route (/person), but it doesn't need to be
    // app.use('/person', function(req, res, next) {
    //   console.log('Hit the person resource');
    //   res.send('Building the router!');
    // })
// in this case, all requests get sent to router
// app.use('/person', router);

// the order here matters! Wildcard goes at the top
app.use('*', error404);
app.use(error500)

app.get('/person', getName, (req, res, next) => {
	res.status(200).json({ name: req.query.name });
});

module.exports = {
  app,
  start:  (port) => app.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  }),
};
