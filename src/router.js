// moved to lab-03
// 'use strict'

// const express = require('express');

// // router directs the request to the function it needs to go to
// const router = express.Router();
// const { Person } = require('./src/models/person.js')

// // bring in middleware
// const getName = require('./middleware/validator.js')

// router.get('/', readPerson);
// // router.get('/:id', readOnePerson);
// router.post('/', createPerson);
// // request parameter
// router.put('/:id', updatePerson);
// router.delete('/', deletePerson);

// const data = [];

// // what is expected of the person router?
// async function readPerson(req, res, next) {
// 	let data = await Person.findALL();
// 	res.status(200).json({ name: req.query.name });
// 	next(getName);
// };

// // test

// async function createPerson(req, res, next) {
// 	const person = await Person.create(req.body);
// 	res.send(person)
// };

// function updatePerson(req, res, next) {
// 	// who do we update?
// 	// request params from url
// 	let id = req.params.id;
// 	const person = {
// 		name: request.body.name,
// 		age: request.body.age,
// 		faveDinosaur: request.body.faveDino,
// 		id: id
// 	}
// 	// update the array
// 	let index = id - 1
// 	person = data(index);
// 	res.send(person);
// };

// function deletePerson(req, res, next) {
// 	let id = req.params.id;
// 	person.findByIdAndDelete(id);
// };

// module.exports = router;