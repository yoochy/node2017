const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const consolidate=require('consolidate');

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
server.use(multer({dest:'./www/upload'}).any());
//4.配置模板引擎
//哪种模板引擎
//输出什么 东西
server.set('view engine','html');
//模板放在哪里
server.set('views','./views');
//哪种模板引擎
 server.engine('html',consolidate.ejs);
 server.get('/index',function(req,res){
   res.render('1.ejs',{name:'blue'});
 });
server.use(static('./www'));
