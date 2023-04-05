'use strict'

function getName(req, res, next) {
  if (!req.query.name) {
    // the argument passed in here is sent to the error handler and passes as err.
    next('No name found.');
  } else {
    next();
  }
}

module.exports = getName;
