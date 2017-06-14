const express=require('express');
const common=require('../../libs/common1');
const mysql=require('mysql');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'blog'});
module.exports=function(){
  var router=express.Router();

//检查登录状态
  router.use((req,res,next)=>{
      if(!req.session['admin_id']&&req.url!='/login'){
        res.redirect('/admin/login');
      }else{
  	      next();
      }
  })

  //login
  router.use('/login',require('./login')());
  router.get('/', (req, res)=>{
    var userid=req.session['admin_id'];
    db.query(`SELECT * FROM user_table WHERE ID='${userid}'`,
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
            req.session['admin_id']=users[0].ID;
            console.log(req.session['admin_id']);


            res.render('admin/mydoc.ejs',{users});
            console.log(users);




        }
      }
    });
  });

  router.use('/article',require('./article')());
    return router;
  };
