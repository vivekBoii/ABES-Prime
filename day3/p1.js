const http= require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    if(req.url==='/home'){
        res.end("<h1>Home Page</h1>");
    }else if(req.url==='/about'){
        res.end("<h1>About Page</h1>");
    }else if(req.url==='/contact'){
        res.end("<h1>contact Page</h1>");
    }else{
        console.log(req)
        res.end("<h1>404 Page</h1>");
    }
})

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
})