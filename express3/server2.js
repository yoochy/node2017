const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();

server.use(cookieParser());

server.use('/aaa/a.html',function(req,res){
 console.log(req.cookies);
  res.send('ok');
});

server.listen(5252);
