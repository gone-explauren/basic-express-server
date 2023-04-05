'use strict'

function error404(err, req, res, next) {
  console.log(err);
  res.status(404).send("What you're lookng for does not exist.");
};

module.exports = error404;