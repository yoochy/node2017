const express=require('express');
const common=require('../../libs/common1');
const mysql=require('mysql');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});
module.exports=function(){

var router=express.Router();
    router.get('/',(req,res)=>{
    res.render('admin/login.ejs', {});

    });

    router.post('/', (req, res)=>{
      var username=req.body.username;
      var password=common.md5(req.body.password+common.MD5_SUFFIX);

      db.query(`SELECT * FROM user_table WHERE username='${username}'`,
      (err,users)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else{
          if(users.length==0){
            res.status(400).send('没有这个用户').end();
          }else {
            if(users[0].password==password){
              //成功了

              // res.locals.session = req.session;
              req.session['admin_id']=users[0].ID;
              


              // res.render('admin/mydoc.ejs',{users});
              // console.log(users);

              res.redirect('/admin/');


            }else {
              res.status(400).send('密码错误哦').end()
            }
          }
        }
      });
  });




  return router;
};
