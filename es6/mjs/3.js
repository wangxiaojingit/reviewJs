 const add1=(x)=>x+1;
 const mul3=(x)=>x*3;
 const div2=(x)=>x/2;
//  方法一：
// function compose(div2,mul3,add1,add1){
//     return function(val){
//         return div2(mul3(add1(add1(val))))
//     }
// }
// const operate=compose(div2,mul3,add1,add1);
// console.log(operate(0))

//方法二：
const compose=(...arg)=>{
   var vals=arg.reverse();
   return (val)=>{
        vals.forEach(item=>{
            val=item(val);
        })
        return val;
   }
}
const operate=compose(div2,mul3,add1,add1);
console.log(operate(0));
