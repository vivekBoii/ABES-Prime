const http= require('http');
const fs = require('fs');


const server = http.createServer(async(req,res)=>{
    res.setHeader('content-type','text/html');
    res.statusCode=200;
    const html=fs.readFileSync('./index.html');
    res.end(html);
})

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
})