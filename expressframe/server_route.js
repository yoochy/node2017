const express=require('express');
var server=express();
var routeUser=express.Router();
routeUser.get('/1.html',function(req,res){
  res.send('user1');
});
routeUser.get('/2.html',function(req,res){
  res.send('user222');
});

server.use('/user',routeUser); 
var articleRouter=express.Router();
server.use('/article',articleRouter);
articleRouter.get('/10001.html',function(req,res){
  res.send('ssddddffxss');
})
server.listen(5252);
