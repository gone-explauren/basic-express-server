// for lab-03
// 'use strict'

// require('dotenv').config();

// const { Sequelize, DataTypes } = require('sequelize');

// const SQL_URL = process.env.SQUL_UL || "sqlite::memory:";

// // using Sequelize to creat a table to handle all the Persons
// const sequelize = new Sequelize(SQL_URL)

// const Person = sequelize.define("Person", {
// 	name: {
// 		type: DataTypes.STRING,
// 		allowNull: false,
// 	},
// 	age: {
// 		type: DataTypes.INTEGER,
// 		allowNull: true,
// 	},
// 	faveDinosaur: {
// 		type: DataTypes.ENUM('triceratops', 't-rex', 'stegosaurus', 'brontesaurus', 'velociraptor'),
// 		defaultValue: 't-rex',
// 		allowNull: false,
// 	}
// })

// module.exports = {
// 	sequelize,
// 	Person
// };