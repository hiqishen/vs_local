var http = require("http")
var fs = require("fs")
var server=http.createServer()

server.on("request",function(req,res){
    var url=req.url
    var www_path="D:/wcode/node/file/www"
    file_path="./public/index.html"

    console.log(url);
    console.log('你的ip地址是',req.socket.remoteAddress,req.socket.remotePort);
    console.log('我的ip地址是',req.socket.localAddress,req.socket.localPort);
    res.setHeader("Content-Type","text/html;charset=utf-8")
    if(url !="/"){
        file_path=www_path+url
    }
    if(url == "/t1"){
        return res.end("你好")
    }
    fs.readFile(file_path,function(err,data){
        console.log(err);
        if (err){
            return res.end("404 not found")
        }
        res.end(data)
    })
})
server.listen(8888,function(){
    console.log("running")
})