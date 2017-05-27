const express=require('express');

var server=express();

server.listen(5252);

server.use('/',function(req,res){
  console.log(req.query);
});
