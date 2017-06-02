const express=require('express');
const bodyParser=require('body-parser');
const multer=require('multer');
const fs=require('fs');
const pathLib=require('path');

var objMulter=multer({dest:'./www/upload/'});

var server=express();
server.use(objMulter.any());
server.post('/',function(req,res){
  console.log(req.files[0].originalname);
var newName=req.files[0].path+pathLib.parse(req.files[0].originalname).ext;
  fs.rename(req.files[0].path,newName,function(err){
    if(err)
    res.send('上传失败');
    else
      res.send('成功');
  });
  //1.获取原始文件扩展名
  //2。重命名文件
});


server.listen(8080);
