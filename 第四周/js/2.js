// 浏览器是多线程，浏览器只给js分配一个线程，是单线程。
// js在单线程中的异步机制，主要是靠浏览器分配的主任务队列和等待任务队列。用下面的例子来解释

// let n=0;
// setTimeout(function(){
//     console.log(n);
// },30)
// console.log(n);
// while(1==1){

// }

//=> 测试程序执行的时间
console.time("AA");
for(var i=0;i<1000;i++){

}
console.timeEnd("AA")

// 结果：先输出0，再输入1，即使是0也是异步，浏览器不能立马执行。
let n=0;
setTimeout(function(){
   console.log(++n);
},0)
console.log(n)