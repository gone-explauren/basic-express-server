'use strict';

// notes:
// index is our root, the entry point, the first place the code will be read
// any code in the node modules are all loaded here and run before the rest of the code

require('dotenv').config();
const server = require('./src/server');
const PORT = process.env.PORT;
console.log(PORT);

server.start(PORT);
// app.listen(PORT, () => {})