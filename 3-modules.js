// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./06-alternative-flavor')

// console.log(data);

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)