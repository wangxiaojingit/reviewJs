// 一个英文、字母、汉字的字符串，给英文单词之前加上空格

var str="zf珠峰培训aa，第几期 css，javascript 前端";
var str2=str.replace(/[a-z|A-Z]+/ig,function(arg){
   //console.log(arg);
   return " "+arg+" ";
});
//console.log(str2)

var str3="abc123珠峰培训456";
str3.replace(/\d+/g,function(arg){
   console.log(arg)
})
