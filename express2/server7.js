const express=require('express');
const bodyParser2=require('./libs/mybodyparser3');

var server=express();
server.listen(5252);

server.use(bodyParser2.aaa());
server.use('/',function(req,res,next){
  console.log(req.body);

});
