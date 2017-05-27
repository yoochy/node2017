var http=require('http');
var GET={};
http.createServer(function(req,res){
console.log(req.url);
if(req.url.indexOf('?')!=-1)
{
  var arr=req.url.split('?');
  var  url1=arr[0];
  var  arr2=arr[1].split('&') ;
  for(var i=0;i<arr2.length;i++)
  {
    var arr3=arr2[i].split('=');
    GET[arr3[0]]=arr3[1];
    //将arr3[0]中内容存为属性
//     对象的内容是由一些存储在特定命名位置的（任意类型的）值组成的，我们称之为属性
// 但是需要强调的一点是，当我们说“内容”时，
// 似乎在暗示这些值实际上被存储在对象内部，
// 但是这只是它的表现形式。在引擎内部，
// 这些值的存储方式是多种多样的，
// 一般并不会存在对象的容器内部。
// 存储对象容器内部的是这些属性的名称，
// 他们就像指针一样，指向这些真正的存储位置
  }

}else{
    var url=req.url;
  }
console.log(url,GET);
res.write('aaa');
res.end();
}).listen(4125);
