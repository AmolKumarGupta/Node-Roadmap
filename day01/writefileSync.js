var fs = require('node:fs');

fs.writeFileSync('test2.txt', 'another hello world');
console.log('test2.txt saved');