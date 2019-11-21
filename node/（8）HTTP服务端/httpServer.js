const http = require("http");
var server = new http.Server();//构造函数
server.listen(8081);
server.on("request",function(req,res){
    res.end("hello node");
})