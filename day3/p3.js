const http= require('http');
let dataArray=[];

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    if(req.url==='/signup' && req.method==='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            let data=JSON.parse(body);
            dataArray.push(data);
            console.log(dataArray);
            res.end(JSON.stringify({message:"Data received"}));
        })
    }else if(req.url==='/getdata' && req.method==='GET'){
        res.end(JSON.stringify(dataArray));
    }
})

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
})

// http://172.16.41.164:9000/setdata