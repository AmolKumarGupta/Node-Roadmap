const fs = require('node:fs');
const { Console } = require('console');

const out = fs.createWriteStream('./output.txt');
const err = fs.createWriteStream('./err.log');

const store = new Console(out, err);
store.log('this is a test');
store.log('i am dev');
store.error('this is error');