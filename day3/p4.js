const http= require('http');
const fs=require('fs');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    if(req.url==='/getdata' && req.method==='GET'){
        const data=fs.readFileSync('./data.json','utf-8');
        res.end(data);
    }else if(req.url==='/setdata' && req.method==='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            let arr =[]
            arr=fs.readFileSync('./data.json')
            arr=JSON.parse(arr);
            let data=JSON.parse(body);
            arr.push({...data,id:arr.length+1});
            fs.writeFileSync('./data.json',JSON.stringify(arr,null,2));
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
