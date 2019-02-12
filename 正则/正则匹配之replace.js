/**
 * Created by Administrator on 2019/1/12.
 */
/*
  reg.exec(str)//正则的捕获
  reg.test(str)// 正则的匹配
* str.match(reg) //把符合正则内容的东西都匹配出来成一个数组
* str.replace()
*
* */

 var  str="zf2018zf2019";
 var reg=/(\d+)/g;
 var val=str.match(reg);
 console.log(val);// ["2018", "2019"]


/*
*
* str.replace()的几种方式
* str.replace("-","zf");
*
* */
var  str1="1-2-3";
str1=str1.replace("-","zf");
console.log(str1);//1zf2-3;
/*
* 发现只能替换一个，所以需要用正则，工作中，也经常用正则，不用这种方式
* */

var  str2="1-2-3";
var reg2=/-/g;
str2=str2.replace(reg2,"zf");
console.log(str2);//1zf2zf3
// 除了第二个替换的参数可以写死之外，还可以写成一个函数，通常会用下面的方式

var str3="zf@123zf@456";
var reg3=/@(\d+)/g;
str3=str3.replace(reg3,function(...arg){
    console.log("555");
    console.log(arg);//["@123", "123", 2, "zf@123zf@456"]
    console.log(arg[1]);//就是小正则匹配的内容
   // console.log(arguments[1]);
   // console.log(arguments);//["@123", "123", 2, "zf@123zf@456", callee: ƒ, Symbol(Symbol.iterator): ƒ]
});
//console.log(str3);//1zf2zf3

/*
* 写一个需求：给一个时间模板，把时间写成时间模板的格式；
* 原理思想：把给定的模板当做参考物，把模板中的时间替换成给的时间str就行了
*
* 1、先把str中具体的时间值获取到，变成数组装起来，如果是单数的时候，就补一个零
*
* */

String.prototype.format=function(template="{0}年{1}月{2}日 {3}:{4}:{5}"){
    // this 就是str
    var reg=/\{(\d+)\}/g;
    var ary=this.match(/\d+/g).map((item)=>{
        return item<10?0+"item":item;
    });//["2019", "2", "12", "08", "19", "60"]
    return  template.replace(reg,function(...arg){
        let index=arg[1];
        return ary[index];
    })
}
var  template="{0}年{1}月{2}日 {3}:{4}:{5}";
var str="2019:2:12 08:19:60";
var val3=str.format(template);
console.log(val3)