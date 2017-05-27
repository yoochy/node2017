const express=require('express');
var server=express();
server.use('/a.html',function(req,res){
  res.send('abc');
  res.end();
});
server.use('/b.html',function(req,res){
  res.send('123');
  res.end();
});

server.listen(5252);
