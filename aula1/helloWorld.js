const http = require('http');
const dt = require('./dateTimeModule');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res ) =>{
    res.statusCode = 200;
    res.setHeader('ContentType',' text/html');
    res.write("The date and time are currently"+ dt.myDateTime());
    res.end('Hello world\n');
});

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
});