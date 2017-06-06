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
server.set('views','./template');
//哪种模板引擎
 server.engine('html',consolidate.ejs);
 //接收用户请求


server.get('/',(req,res,next)=>{
   //查询banner里面东西

  db.query("SELECT * FROM banner_table",(err,data)=>{
  if(err){
              //  console.log(err);
               res.status(500).send('database error').end();//服务器内部错误
             }else{
              //  console.log(data);
               //查询新闻列表
               res.banners=data;
              next();
             }
           });

       });
         //链式操作
server.get('/',(req,res,next)=>{
  console.log(res.banners);
  // var db=mysql.createConnection({host:'localhost',user:
  // 'root',password:'123456',database:'blog'});
  //查询文章里面东西
  db.query('SELECT ID,title,summary FROM article_table',(err,data)=>{
    if(err){
      res.status(500).send('database error').end();
    }else{
      res.articles=data;
      next();
    }
  });
});
server.get('/',(req,res)=>{
  res.render('index.ejs',{banners:res.banners,articles:res.articles});
});


server.get('/article',(req,res)=>{
  if(req.query.id){
    if(req.query.act=='like'){
      //增加一个赞
      db.query(`UPDATE article_table SET n_like=n_like+1 WHERE ID=${req.query.id}`,(err,data)=>{
        if(err){
          res.status(500).send(' 数据库有问题ballla').end();
          console.error(err);
        }else{
          //显示文章
          db.query(`SELECT * FROM article_table WHERE ID=${req.query.id}`,(err,data)=>{
            if(err){
              res.status(500).send('数据有问题apple').end();
            }else{
              if(data.length==0){
              res.status(404).send('您查看的文章被外星人带走了').end();
              }else{
                var articleData=data[0];
                articleData.sDate=common.time2date(articleData.post_time);
                articleData.content=articleData.content.replace(/^/gm,'<p>').replace(/$/gm,'</p>');
                res.render('conText.ejs',{
                article_data:articleData
                });
              }
            }
          });
        }
      });
    }else{
      //显示文章
       db.query(` SELECT * FROM article_table WHERE ID=${req.query.id}`, (err, data)=>{
         if(err){
           res.status(500).send('数据有问题').end();
         }else{
           if(data.length==0){
             res.status(404).send('您请求的文章找不到').end();
           }else{
             var articleData=data[0];
             articleData.sDate=common.time2date(articleData.post_time);
             articleData.content=articleData.content.replace(/^/gm, '<p>').replace(/$/gm, '</p>');

             res.render('conText.ejs', {
               article_data: articleData
             });
           }
         }
       });
     }

  }else{
    res.status(404).send('您查看的文章被外星人带走了').end();
  }
}
);


//4.static数据
server.use(static('./www'));
