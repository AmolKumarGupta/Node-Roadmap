var fs = require('node:fs');
let file = 'test2.txt';
fs.unlink(file, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log(`${file} is deleted`);
});