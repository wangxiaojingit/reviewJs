1、用户昵称规定只能是“数字、大小字母”组成，而且不能少于两位，不能超过20位，写个正则匹配这个需求。
var reg=/^[\da-zA-Z]{2,20}$/ig

2、谈谈你对面向对象的理解
[JS本身就是面向对象编程的]
JS本身就是基于面向对象（oop）编程思想开发出来的语言，我们学习js就是在学习js中的类和实例，例如：数组是Array
的实例、对象是Object的实例、函数是Function的实例...,在这些内置类的原型上有很多公共的属性和方法，这些方法可以被实例用来调用，我们学习js就是学习这些方法。。。
[面向对象真实项目的应用]
平时的业务逻辑开发，我没刻意使用类的方式来做，只有在一些组件或者插件封装的时候才会基于构造函数和原型链使用类和实例完成，例如，之前封装过一些tab页卡、轮播图、模态框、表单验证等插件都是这么来处理的。

[面向对象中的一些语法和特点]

所谓面向对象就是基于class或者function创建一个类，执行的时候new执行一个实例，这样实例就可以调取类上提供的方法、js中没有严格意义的多态，不能进行方法的重写，常用的继承方式有很多，例如：原型继承、call继承、寄生组合继承、es6中的继承等，有些方法会存在一些问题，我项目中后来都是基于class中的extend实现继承的。



3、this的总结
this指的是方法执行的主体，跟在哪定义，在哪执行没必然的连系，主要有以下几种情况
1、方法执行的时候，如果前面有.,点前面是谁，this就是谁
2、给元素绑定事件的时候，里面的this就是当前触发事件的元素
3、在构造函数中，创建一个实例，实例中的this就是当前实例
4、通过call apply bind 等可以改变this的指向，
   call中第一个参数指的是this的指向，如果不写，在非严格模式下就是window，如果是在严格模式下就是undefined
5、箭头函数中的本身没有this，如果在箭头函数中出现this，指的是上下文的this
6、小括号可以改变this的指向
（12,obj.fn）(),  当小括号有多个值的时候，以最后一个为准，this指的是window


4、
var n=2;
function a(){
   var n=3;
   function b(m){
      alert (++n+m);
   }
   b(4);
   return b;

}
var c=a(5);
c(6);
alert(n);

5、什么是作用域链什么是原型链？
  作用域链
当一个函数执行的时候，会形成一个私有作用域，这个函数中的形参和声明的变量都是私有变量，这个私有作用域有个自我保护的机制，私有变量是不会受外界干扰的，但是这个私有作用域中没有声明的变量，就会向上一级作用域中查找，如果上一级作用域中还没有，就会一直向上上一级作用域查找，直到找到window为止，这种查找变量的方式就叫做作用域链。
  原型链
当一个实例查找自己的私有属性的时候，先找这个实例上是否具有这个私有属性，如果没有就以__proto__向上查找，如果当前实例的原型上还没有这个属性的话，就一直向上查找，直到找到Object.prototype 为止，这个查找机制就是原型链机制

6、实现一个$attr(domId,name,value)遍历id是domId，内部属性为name且值为value的元素？
```
//实现一个$attr(domId,name,value)遍历id是domId，内部属性为name且值为value的元素？
//==> 在这里需要把12行中普通元素，（除了表单元素），中的innerHTML的内容也当成value（题目特别说明）
let $attr=(domId,name,value)=>{
     //=> 第一步先找到所有的元素，然后进行筛选
     let allElement=document.getElementsByTagName("*");
     //=> 把类数组转化为数组
     let allElementAry=[].slice.call(allElement);
     let getElement=allElementAry.filter(item=>{
        //   //=> 只获取id 和name值一致的元素,下面这种方法获取到的只有一个表单元素，如果用下面的
        //   //方式进行获取的时候，只能获取到是表单的元素，其它非表单的元素，即使拥有那个name值也
        //   //获取不到，所以为了都能获取到可以用getAttribute
        //   //return  item.id==domId&&item.name==name;
        //    return  item.id==domId&&item.getAttribute("name")==name
        //  需求2；
           return  item.id==domId&&item.getAttribute("name")==name&&(item.value==value||item.innerText==value)
     })
     return  getElement; 
     

}
var aa=$attr("hobby","hobby","唱歌");


```
7、数组去重的方法
```
// 数组去重的方法：不改变原来的数组
Array.prototype.myUnique=function(){
  //首先不能改变原来的数组，所以先要复制一份
  let _this=this.slice(0);
  //遍历克隆的数组，并且用一个空对象存放属性
  let obj={};
   for(var i=0;i<_this.length;i++){
      let item=_this[i];
      if(typeof obj[item]!="undefined"){
           /* 
            _this.splice(i,1);
            i--; 
             这样子改变了数组的位置，容易耗内存，所以我们把最后一项放到
             这个位置，然后删除掉最后一项
           */ 
           _this[i]=_this[_this.length-1];
           _this.length--;
           i--;
           continue;//break结束整个循环，continue是结束本次循环，继续下个循环 
      }
      obj[item]=true;
    }
    return _this;
} 

let ary1=[1,2,3,1,3,2,4];
let myNewary=ary1.myUnique();
console.log(myNewary);
```
//=> 数组去重双循环,依次拿出数组中的每一项，给后面的所有项进行比较，
//如果后面的项有相同的，就删除，没有就留下
Array.prototype.myUnique2=function(){
  let _this=this.slice(0);
  for(let i=0;i<_this.length;i++){
     let item=_this[i];
        for(let j=i+1;j<_this.length;j++){
            if(item==_this[j]){
            //如果此项重复，就用最后一项替换，
            _this[j]=_this[_this.length-1];
            _this.length--;
            j--;
            }
        }
    }
    return _this;
}

let ary2=[1,2,3,1,2,3];
console.log(ary2.myUnique2());


//==> indexof 方法去重，循环数组中的每一项，和后面的每一项进行比较，
//如果后面有这一项，就把拿出来的项删除掉,不兼容ie

Array.prototype.myUnique3=function(){
   let _this=this.slice(0);
   for(var i=0;i<_this.length;i++){
       var item=_this[i];
       let nextAll=_this.slice(i+1);
       if(nextAll.indexOf (item)>-1){
         //==> 说明此项有
         _this[i]=_this[_this.length-1];
         _this.length--;
         i--;
       }
   } 
   return _this;
}
let ary3=[3,8,9,8,8,2];
console.log(ary3.myUnique3());



//==> 排序后相邻去除法
//思想：先把数组排序，然后拿出每一项给下一项比较，只有两值不相同的时候，才
//才会把上一项存起来，相同就不存


Array.prototype.myUnique4=function(){
  _this=this.slice(0);
  let resultAry=[]
  var ary= _this.sort((a,b)=>a-b);
  for(let i=0;i<ary.length;i++){
        let item=ary[i];
        let next=ary[i+1];
        if(item!=next){
            resultAry.push(item)
        }
  }
 return resultAry;
}
let ary4=[3,6,8,1,2,2,1,6,8];
console.log(ary4.myUnique4());


8、你知道的算法？
1、递归算法；什么是递归算法呢，就是自己调用自己方法执行的时候，又调用了自己的方法，（通常递归都是有条件的，不然会一直执行下去，就会报错，超出最大栈内村）

//什么是递归？像下面的函数调用自己，让自己执行的时候，又调用了自己的方法，就是
//递归，但是递归通常都是有判断条件的
```
function fn(){
  fn()
} 
fn()
// 求一个数1-100，求出能同时被3和5整除的所有数字之和
var total=0;
for(var i=1;i<=100;i++){
  if(i%15==0){
    total+=i;
  }
   
}
//像上面那种情况比较low，通常我们会用递归
function fn(n){
  if(n <=0){
    return 0;
  }
   if(n%15==0){
      return n+fn(n-1)
   } 
   return fn(n-1)
} 

fn(100)
//
function fn(n){
   if(n>100){
     return 0;
   }
   if(n%15==0){
      return n+fn(n+1)
   } 
   return fn(n+1)
} 
fn(1)

```

9、数组的扁平化，多维数组变成一维数组，var ary=[[1,[2,3,4[5,6]]]];把多维数组变成一维数组

// 方法一：
var ary=[68,[1,[2,3,4,[5,6]]]];
var aryStr=JSON.stringify(ary);
aryStr=aryStr.replace(/\[|\]/g,"");//"68,1,2,3,4,5,6"
aryStr=JSON.parse("["+aryStr+"]");
//方法二： 用递归的方法，把二维数组变成一维数组
//循环数组中的每一项，如果此项不是一个对象，我们就把它放到空数组，
//如果是一个对象，我们就继续再调用这个方法
var result=[]; 
function fn(ary){
   for(let i=0;i<ary.length;i++){
       var item=ary[i];
      if(typeof item!="object"){
          result.push(item);
      }else{
        fn(item)
      }
   }
} 
var ary=[68,[1,[2,3,4,[5,6]]]];
fn(ary)

10、说下js中的类的继承和多态

js中有封装、多态、继承
- 封装：就是把具有特定功能封装成一个函数，作用就是"高内聚，低耦合"
- 多态：
   在后台语言中多态有重载和重写，但是在js中没有重载，
  +  重载 什么是重载呢？在后台语言，虽然函数名字相同，但是里面的形参的类型不同，或者个数不同的时候，方法名字相同的函数就叫重载。但是我们js中只要函数名字相同，不会根据形参的不同就相当于定义两个。函数名字相同，后面的函数就会替换前面的函数。
  +  重写：子类重写父类的方法  
- 继承： 子类继承父类的方法和属性：
   + 原型继承
   + call继承
   + 寄生组合继承
   +ES6 中Class类实现继承
   //=========> 1、原型继承，让子类的原型指向父类的一个实例
   function A(){
      this.x=200;
   }
   A.prototype={
      constructor:A,
      getX:function(){
         console.log("x")
      }
   } 
   function B(){
      this.y=100;
   }
//子类的原型指向父类的实例。    
B.prototype=new A();
 // B 的一个实例小f同时拥有B类的私有属性，同时想要继承A上私有的属性和原型上的属性
let f=new B();
//======>2、call 继承：call继承就是把父类当成普通函数执行，
//然后把父类中的this替换成子类的实例的this。call 继承有一个缺点就是只能继承父类中的私有属性，原型上的公有属性都继承不到

function A(){
   this.x=100;
} 
A.prototype={
   constructor:A,
   getX:function(){
      console.log("getX")
   }
}
function B(){
   A.call(this);//这里就是把A当做普通函数执行，这里的this就是当前小f，或是其它的实例。
   this.y=200;
}
let f=new B();

//=====> 3、寄生组合继承
  
function A(){
    this.x=100
}  

A.prototype={
   constructor:A,
   getX:function(){
      console.log("x");
   }
}

function B(){
   this.y=200
} 

// 要想让B类继承A类中的私有属性，我们可以用call
// 寄生继承第一版
function B(){
   A.call(this);
   this.y=200;
}
B.prototype=A.prototype;
//但是直接B.prototype=A.prototype 的时候有一个缺点，就是我们可以通过B.prototype
//直接可以更改掉A的原型上的方法，这样的话会影响A的实例。所以做下改良
//Object.create(obj),这个方法就是创建一个空对象，然后这个空对象上的__proto__指向参数的原型。
B.prototype=Object.create(A.prototype)


原型继承和call继承以及寄生组合继承的有缺点？
> 原型继承，子类B的prototype等于f，（A父类的实例）， 这样子类B继承过来的A的私有属性和公有属性都成了公有属性.2、子类容易改变父类原型上的方法，通过B.prototype.x=300,就会把A的私有属性改变，通过B.prototype.__proto__就能改变A的原型上的方法。

> call继承，主要是在子类的函数中，把父类当成一个函数执行，这样的话，只能继承父类中的私有属性，原型上的属性和方法都继承不到

> 寄生组合继承就是结合了call，继承了父类的私有属性，同时用Object.create(父类的原型)，重新创建了一个空对象，让这个空对象的__proto__指向父类的原型，这样子就更好点。

> es6 的类：

class Fn { //Fn 是类名，没有小括号， 
    constructor(name){ //constructor 代表的是当前类
       // constructor里面的 代表的就是私有属性
       this.name=name;
    } 
    // 这个代表的是原型上的方法，由于es6还不是很完善，所以这里是原型上的方法，不能是原型上
    //的属性，如果要想写原型上的属性，可以单写。
    getX(){
       console.log("x");
    } 
    static AA (){ // 把fn当做普通的函数，这个函数上的属性方法，但是es6不完善，这里也只能               //是方法,不能是属性

    }
}
Fn.prototype.x=100;
Fn.name="lili";




function fn(n,m){
   this.x=n;
   this.y=m;
} 

fn.prototype.getX=function(){
  console.log("x");
} 
fn.AA=function(){
   console.log("AA")
} 
fn.name="lili";

> es6 的继承

class A {
   constructor(x){
      this.x=x
   }
   getX(){
      console.log("A")
   } 
   static AA(){
      console.log("把普通函数当成一个对象的方法属性")
   }
} 
// B类继承A类

class B extends A{ //extends 相当于实现了继承
   constructor(y){
     super();//类似于call继承，相当于把A类的constructor 执行，并且把里面的this换成B类实///例
      this.y=y
   }
   getY(){
      console.log("getY")
   }
   
} 
let f=new B();


11、js中有一个原生的insertBefore方法，目的是把新元素插入到目标元素之前，现在要实现一个insertAfter方法，目的是把新元素插入到目标元素之后。


// 插入到A元素之后，原理就是插入到A元素的下个兄弟元素之前，如果没有下个兄弟元素，就是插入到父容器的后面。
/*
 * 参数说明：
   newElement 代表的是新节点
   oldElement代表的是目标元素
 * 
 *  */

``` 
function insertAfter(newElement,oldElement){
      let nextNode=oldElement.nextElementSibling;
      let par=oldElement.parentNode;
      if(nextNode){
         par.insertBefore(newElement,nextNode);
      }else{
        par.appendChild(newElement);
      }
       
} 

// 创建一个p元素
var op=document.createElement("p");
op.innerText="p";
var od1=document.getElementById("d1");
insertAfter(op,od1);
```

12、一个英文、字母、汉字的字符串，给英文单词之前加上空格