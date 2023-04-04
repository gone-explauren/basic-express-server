'use strict'

function error404(err, req, res, next) {
  console.log(err);
  res.status(404).send('Not found');
};

module.exports = error404;