'use strict'

// error handler -> four is the magic number of parameters!!
function error500(err, req, res, next) {
  console.log(err);
  res.status(500).send('Please provide your name.');
};

module.exports = error500;