var fs = require('node:fs');

let data = fs.readFileSync('main.html').toString();
let pat = /<(\"[^\"]*\"|'[^']*'|[^'\">])*>/gim;
let res = data.match(pat);
console.log(res);