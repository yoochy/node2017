const querystring=require('querystring')
var http=require('http');
http.createServer(function(req,res){
console.log(req.url);
if(req.url.indexOf('?')!=-1)
{var arr=req.url.split('?')
var json=querystring.parse(arr[1]);

}else{
    var url=req.url;
  }
console.log(json);
res.write('aaa');
res.end();
}).listen(4125);
