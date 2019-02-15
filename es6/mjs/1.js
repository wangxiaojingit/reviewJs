//11、js中有一个原生的insertBefore方法，目的是把新元素插入到目标元素之前，现在要实现一个insertAfter方法，目的是把新元素插入到目标元素之后。

// 插入到A元素之后，原理就是插入到A元素的下个兄弟元素之前，如果没有下个兄弟元素，就是插入到父容器的后面。
/*
 * 参数说明：
   newElement 代表的是新节点
   oldElement代表的是目标元素
 * 
 *  */
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