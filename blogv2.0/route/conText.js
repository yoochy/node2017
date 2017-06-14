const express=require('express');
const common=require('../libs/common');
const mysql=require('mysql');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});



module.exports=function(){

  var router=express.Router();


		router.get('/',(req,res,next)=>{
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
		router.get('/',(req,res,next)=>{
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
		router.get('/',(req,res)=>{
		  res.render('index.ejs',{banners:res.banners,articles:res.articles});
		});


		router.get('/article',(req,res)=>{
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

  return router;
}