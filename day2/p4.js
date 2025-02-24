const http= require('http');
const fs = require('fs');


const server = http.createServer(async(req,res)=>{
    res.setHeader('content-type','application/json');
    res.statusCode=200;
    const json=fs.readFileSync('./vivek.json');
    res.end(json);
})

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
})