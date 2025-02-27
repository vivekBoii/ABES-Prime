const http= require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    if(req.url==='/signup' && req.method==='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            let data=JSON.parse(body);
            console.log(data);
            res.end(JSON.stringify({message:"Data received"}));
        })
    }
})

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
})