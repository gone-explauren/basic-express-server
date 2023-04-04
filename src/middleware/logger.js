'use strict'

// notes:
// middleware: three params
// function (req, res, next) {}

// next passes request to the next middleware (another function)

// example:
//base case: did the job, pass next

// edge case: an error occurs, trigger error function
// next ("oops!")

function logger(req, res, next) {
	console.log(req.method, req.path);
	next();
}

module.exports = logger;