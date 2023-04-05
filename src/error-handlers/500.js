'use strict'

function error500(err, req, res, next) {
  console.log("Server error: ", err);
  res.status(500).send('Please provide your name.');
};

module.exports = error500;