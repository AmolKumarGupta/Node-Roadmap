var http = require('http');
var fs = require('node:fs');
var host = '127.0.0.1';
var port = 8000;

var server = http.createServer( (req, res) => {
    res.writeHead(200, {"Content-Type": "text/html"});
    fs.readFile('main.html', (err, data) => {
        if (err) {
            throw err;
        }
        res.end(data);
    });
})

server.listen(port, host, (err) => {
    if (err) {
        return console.error('Error: '+err);
    }
    console.log(host+':'+port);
})