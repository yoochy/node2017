const urll=require('url')
var http=require('http');
http.createServer(function(req,res){

var obj=urll.parse(req.url,true);

console.log(obj.pathname,obj.query);
res.write('aaa');
res.end();
}).listen(4125);
