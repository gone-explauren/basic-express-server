'use strict'

function getName(req, res, next) {
  if (!req.query.name) {
    next('Please provide a name.');
  } else {
    next();
  }
}

module.exports = getName;
