const ejs=require('ejs');

ejs.renderFile('./views/1.ejs',{json:{arr:[
  {user:'blue',pass:'123456'},
  {user:'zhangsan',pass:'654321'},
  {user:'xiaoming',pass:'1234456'},
]}},function(err,data){
  console.log(data);
});
