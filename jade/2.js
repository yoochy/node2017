const jade=require('jade');
var str=jade.renderFile('./views/4.jade',{pretty:true});
//pretty:true美化代码
console.log(str);
