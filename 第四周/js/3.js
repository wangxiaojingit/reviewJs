// 好的学习网站 mdn
//=>1、Promise 有三种状态：pending(初始完成，准备执行异步编程，等待的状态)，fulfilled(执行成功)，rejected(执行失败)


//=> 2、Promise本身是同步编程，是用来管理异步编程的，在new的一瞬间，就立马执行A处的函数，所以先打印1，然后执行下面的console.log(2),
new Promise(function(){
    //此处的函数A
    setTimeout(()=>{
       console.log("setTimeout")
    },30)
    console.log("1")
}).then()
console.log("2")

//=> 3、异步操作成功之后或者失败之后的一些操作，以前都写在一起，现在写在then里面，单独提取出来，这样更加的方便，想要在异步中调用成功的就用resolve，想要调取失败的就用reject()
new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve(100);
    },30)
   
}).then(function(res){
   //此处的函数就是resolve成功函数，传递进去，
   console.log("ok",res);
},function(){
    //此处的函数就是reject的失败函数，传递进去

})

// Promise 的初步使用
let val=null;
let pro=new Promise(function(resolve,reject){
      let xhr=new XMLHttpRequest();
      xhr.open("get","2.js",true);
      xhr.onreadystatechange=function(){
          if(xhr.readyState==4 && xhr.status===200){
            val=xhr.responseText;
            resolve(val);
          }
          if(xhr.status!=200){
             reject(val);
          }
      }

      xhr.send(null)
})

pro.then(function(res){
    console.log(res);
    return 100
},function(){

}).then(function(val){
  // val 这个值就是上个成功函数中返回的100
},function(){

})
