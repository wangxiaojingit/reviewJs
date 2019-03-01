// 定时器的基础知识
// 只要是定时器，都会返回一个值，这个值是序列号，这个序列号会依次累加，清除定时器的时候无轮用setTimeout还是setInterval都可以清除


let count=0;

let timer=setTimeout(function(){
     
     
     
     
},30)
//console.log(timer);// 1
let timer2=setInterval(function(){
    count++;
    console.log(count);
    if(count==5){
       // clearInterval(timer2);
        clearTimeout(timer2);
     }
},30)
//console.log(timer2)//2