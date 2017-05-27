const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const urlib=require('url');

var server=http.createServer(function(req,res){
  //get
var obj=urlib.parse(req.url,true);
var url=obj.pathname;
const GET =obj.query;
//post
var str='';
req.on('data',function(data){
  str+=data;
});
req.on('end',function(){
  const POST=querystring.parse(str);

var file_name='./www'+url;
fs.readFile(file_name,function(err,data){
  if(err){
    res.write('404');
  }else{
    res.write(data);
  }
  res.end();
});
});
});
server.listen(5252);
