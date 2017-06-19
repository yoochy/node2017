const express=require('express');
const mysql=require('mysql');
const querystring=require('querystring');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});



module.exports=function(){

  var router=express.Router();
router.get('/',(req,res)=>{
  var authorids=req.session['admin_id'];
  db.query(`SELECT * FROM user_table WHERE ID='${authorids}'`,
  (err,userss)=>{
  if(err){
    console.error(err);
    res.status(500).send('database error').end();
  }else{
    if(userss.length==0){
      res.status(400).send('没有这个用户').end();
    }else {


        res.render('admin/article.ejs', {userss});
    }
  }
});
});



  router.post('/',(req,res)=>{
    var title=req.body.title;
    var content=req.body.content;
    var summary=req.body.summary;
	var authorid=req.session['admin_id'];
	var posttime=new Date().getTime()+"";
	var post_time=posttime.substr(0,10);
	var n_like="0";
  	db.query(`SELECT * FROM user_table WHERE ID='${authorid}'`,
  	(err,users)=>{
    if(err){
      console.error(err);
      res.status(500).send('database error').end();
    }else{
      if(users.length==0){
        res.status(400).send('没有这个用户').end();
      }else {

          //成功了

          // res.locals.session = req.session;
          var author=users[0].username;
          var author_src=users[0].src;
          console.log(post_time+'我是是时间');
          console.log(title+'我是是标题');
          console.log(content+'我是内容');
          console.log(summary+'我是是简介');
          console.log(author+'我是是作者');
          console.log(author_src+'我是是作者头像');
          //添加
    	  db.query(`INSERT INTO article_table(title,content,summary,author,author_src,post_time,n_like)
          VALUE('${title}','${content}','${summary}','${author}','${author_src}','${post_time}','${n_like}')`,(err,data)=>{
          if(err){
            console.error(err);
            res.status(500).send('database error').end();
          }else {
            res.redirect('/');
          }
        });
      }
    }
  });
  });















  return router;
};
