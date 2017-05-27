const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();

server.use(cookieParser());

server.use('/aaa/a.html',function(req,res){
  res.clearCookie('user');
  res.send('ok');
});

server.listen(5252);



///注意这里删除不掉cookie
