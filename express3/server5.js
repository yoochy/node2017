const express=require('express');
const cookieParser=require('cookie-parser');
var server=express();

server.use(cookieParser('sedwcffdsff'));

server.use('/',function(req,res){
  req.secret='sedwcffdsff'
res.cookie('user','blue',{signed:true});
console.log('签名cookie' ,req.signedCookies);
console.log('未签名版本cookie',req.cookies);
  res.send('ok');
});

server.listen(5252);
