const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

// call the createServer method from the http module
const server = http.createServer(function(req,res){
    res.statusCode = 200;
    // set the headers
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello world \n');
});

server.listen(port, hostname, function(){
    console.log('Server running at http://'+ hostname + ':' + port + '/');
});
