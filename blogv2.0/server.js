const express=require('express');
const static=require('express-static');
const cookieParser=require('cookie-parser');
const cookieSession=require('cookie-session');
const bodyParser=require('body-parser');
const multer=require('multer');
const consolidate=require('consolidate');
const mysql=require('mysql');
const common=require('./libs/common');
//连接池
const db=mysql.createPool({host:'localhost',user:
'root',password:'123456',database:'blog'});

var server=express();
server.listen(5253);
//1.解析cookie
server.use(cookieParser('sssdaafddsdsfsd'));
//2.使用session
var arr=[];
for(var i=0;i<100000;i++)
{
  arr.push('key_'+Math.random());
}
server.use(cookieSession({name:'sess_id',keys:arr,maxAge:20*3600*1000}));
//3.post数据
server.use(bodyParser.urlencoded({extended:false}));
server.use(multer({dest:'./www/upload'}).any());
//4.配置模板引擎
//哪种模板引擎
//输出什么 东西
server.set('view engine','html');
//模板放在哪里
server.set('views','./template');
//哪种模板引擎
 server.engine('html',consolidate.ejs);
 //接收用户请求

 //Route
server.use('/',require('./route/conText.js')());
server.use('/admin/',require('./route/admin/mydoc.js')());
server.use('/register',require('./route/admin/register.js')());




//4.static数据
server.use(static('./www'));
