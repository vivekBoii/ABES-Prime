const http= require('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/html'});
    res.end('<div style="width: 300px; height: 200px; display: flex; flex-direction: column;"> <div style="background-color: #FFCC00; flex: 1;"></div><div style="background-color: white; flex: 1; position: relative;"> <div style="background-color: #000080; width: 50px; height: 50px; border-radius: 50%; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);"></div></div> <div style="background-color: #008000; flex: 1;"></div></div>');
})

server.listen(9000,(err)=>{
    if (err){
        console.log(err);
    }else{
        console.log("server started at 9000")
    }
})