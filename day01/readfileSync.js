var fs = require('node:fs')

let content = fs.readFileSync('test.csv')
console.log(content.toString());
console.log('read: ');