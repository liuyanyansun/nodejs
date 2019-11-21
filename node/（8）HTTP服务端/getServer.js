const http = require("http");
const url = require("url");
http.createServer(function(req,res){
    /**
     * 哪些操作发起的是get请求？？？
     * 1.点击超链接
     * 2.地址栏通过网址请求
     * 3.ajax发起get请求
     * 
     * 接收get请求的参数
     */
    // console.log(req.url);

    var urlObj = url.parse(req.url,true);
    console.log(urlObj);
    console.log(urlObj.pathname);
}).listen(8081)
console.log("server is listening 8081");