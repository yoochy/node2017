const express=require('express');
const common=require('../../libs/common1');
const mysql=require('mysql');
const pathLib=require('path');
const fs=require('fs');
var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});
module.exports=function(){
	var router=express.Router();
    router.get('/',(req,res)=>{
    res.render('admin/register.ejs', {});

    });

    router.post('/', (req, res)=>{
      var user_name=req.body.usernames;
      var pass_word=common.md5(req.body.passwords+common.MD5_SUFFIX);
      console.log(req.body.passwords);
      console.log(pass_word);
      var ext=pathLib.parse(req.files[0].originalname).ext;
      var oldPath=req.files[0].path;
      var newPath=req.files[0].path+ext;
      var newFileName='upload/'+req.files[0].filename+ext;
     
      db.query(`SELECT * FROM user_table WHERE username='${user_name}'`,
      (err,users)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else{
          if(users.length==0){
				      fs.rename(oldPath, newPath, (err)=>{
				      if(err){
				        res.status(500).send('file opration error').end();
				      }else{
				        if(req.body.mod_id){  //修改

				        }else{                //添加
				          db.query(`INSERT INTO user_table \
				          (username, password, src)
				          VALUES('${user_name}', '${pass_word}', '${newFileName}')`, (err, data)=>{
				            if(err){
				              console.error(err);
				              res.status(500).send('database error').end();
				            }else{
				              res.redirect('/admin/login');
				            }
				          });
				        }
				      }
				    });
           
          }else {
             res.status(400).send('这个用户已经存在').end();
          }
        }
      });

  });
    return router;
      

























      




  
};
