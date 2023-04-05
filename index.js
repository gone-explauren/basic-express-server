'use strict';

// notes:
// index is our root, the entry point, the first place the code will be read
// any code in the node modules are all loaded here and run before the rest of the code

require('dotenv').config();
const { sequelize } = require('./src/models/person.js');
const server = require('./src/server');

const PORT = process.env.PORT;
// console.log(PORT);

// for lab-03
// sequelize.sync()
// then(() => {
// server.start(PORT);
// }).catch(err => {
// 	console.log('SQL connection error: ', err)
// })

// console.log("This is the app import!!!, app")
// .start() is a function on app!
server.start(PORT);
// app.listen(PORT, () => {})