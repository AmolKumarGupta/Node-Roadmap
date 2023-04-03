var fs = require('node:fs');

fs.writeFile('test.txt', 'hello world', (err) => {
    if (err) {
        throw err;
    }
    console.log('saved in test.txt');
})