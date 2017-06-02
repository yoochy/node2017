const mysql=require('mysql');
//1.链接createConnection(哪台服务器，用户名，密码，库)
var db=mysql.createConnection({host:'localhost',user:'root',password:'123456',database:'20170531'});
//2.查询
db.query("SELECt *FROM `user_table`;",(err,data)=>{
  if(err)
    console.log('出错了',err);
  else
    console.log('成功了',data);
    console.log(JSON.stringify(data));//json转字符串
})
