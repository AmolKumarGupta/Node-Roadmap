var fs = require('node:fs');

fs.readFile('test.csv', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data.toString());
});
console.log('read:');