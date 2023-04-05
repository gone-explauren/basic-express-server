'use strict'

function getName(req, res, next) {
  if (!req.query.name) {
    next('Please provide your name.');
  } else {
    next();
  }
}

module.exports = getName;
