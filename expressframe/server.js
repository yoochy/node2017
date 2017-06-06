const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const ejs=require('ejs');
const jade=require('jade');

var server=express();
server.listen(5252);
//1.解析cookie
server.use(cookieParser('sssdaafddsdsfsd'));
//2.使用session
var arr=[];
for(var i=0;i<100000;i++)
{
  arr.push('key_'+Math.random());
}
server.use(cookieSession({name:'zns_sess_id',keys:arr,maxAge:20*3600*1000}));
//3.post数据
server.use(bodyParser.urlencoded({extended:false}));
//4.static数据
server.use('/',function(req,res,next){
  console.log(req.query,req.body,req.cookies,req.session);

})
