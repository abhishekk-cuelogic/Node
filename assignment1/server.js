var http=require('http');
require('dotenv').config();

var server=http.createServer(function(req,res){
    res.writeHead(200,{"Content-Type":"Text/html"});
    res.end(`
        <!DOCTYPE html>
        <head>
            <title>Hello world</title>
        </head>
        <body>
            <h1>Hello from server</h1>
        </body>
    
    `)
})

server.listen(process.env.PORT);

console.log("server running on port 3000");