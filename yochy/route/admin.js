const express=require('express');
const common=require('../libs/common');
const mysql=require('mysql');

var db=mysql.createPool({host:'localhost',user:'root',password:'123456',database:'newblog'});


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
  router.get('/login',(req,res)=>{
      res.render('admin/login.ejs', {});
  });
  router.post('/login', (req, res)=>{
  var username=req.body.username;
  var password=common.md5(req.body.password+common.MD5_SUFFIX);

  db.query(`SELECT * FROM admin_table WHERE username='${username}'`,
  (err,data)=>{
    if(err){
      console.error(err);
      res.status(500).send('database error').end();
    }else{
      if(data.length==0){
        res.status(400).send('no this admin').end();
      }else {
        if(data[0].password==password){
          //成功了
          req.session['admin_id']=data[0].ID;
          res.redirect('/admin/');
        }else {
          res.status(400).send('this password is incorrect').end()
        }
      }
    }
  });
});


router.get('/',(req,res)=>{
  res.render('admin/index.ejs',{});
});

//banner
router.get('/banners',(req,res)=>{
  switch (req.query.act) {
    case 'mod':
      db.query(`SELECT * FROM banner_table WHERE id=${req.query.id}`,(err,data)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else if(data.length==0){
          res.status(404).send('data not find').end();
        }else {
          db.query(`SELECT * FROM banner_table`,(err,banners)=>{
            if(err){
              console.error(err);
              res.status(500).send('database error').end();
            }else{
              res.render('admin/banners.ejs',{banners,mod_data:data[0]});
              //数据传到banners里面
            }
          });
          //依旧渲染banner
        }
      });
      break;
    case 'del':
      db.query(`DELETE FROM banner_table WHERE ID=${req.query.id}`,(err,data)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else {
          res.redirect('/admin/banners');
        }
      });

      break;
    default:
    db.query(`SELECT * FROM banner_table`,(err,banners)=>{
      if(err){
        console.error(err);
        res.status(500).send('database error').end();
      }else{
        res.render('admin/banners.ejs',{banners});
        //数据传到banners里面
      }
    });
    break;
  }

});
router.post('/banners',(req,res)=>{

  var title=req.body.title;
  var description=req.body.description;
  var href=req.body.href;
  if(!title||!description||!href){
    res.status(400).send('arg error').end();
  }else{
    if(req.body.mod_id){ //修改
      db.query(`UPDATE banner_table SET \
         title='${req.body.title}',\
      description='${req.body.description}',\
      href='${req.body.href}'\
      WHERE ID=${req.body.mod_id}`,
      (err,data)=>{
        if(err){
          console.error(err);
          res.status(500).send('data errror').end();
        }else {
          res.redirect('/admin/banners');
        }
      }
      )
    }else{               //添加
      db.query(`INSERT INTO banner_table(title,description,href)
      VALUE('${title}','${description}','${href}')`,(err,data)=>{
        if(err){
          console.error(err);
          res.status(500).send('database error').end();
        }else {
          res.redirect('/admin/banners');
        }
      });
    }
  }
});
  return router;
};
