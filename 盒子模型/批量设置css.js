/**
 * Created by Administrator on 2019/1/14.
 */
function setCss(ele,attr,val) {
    if(attr=="opacity"){
        ele.style["opacity"]=val;
        ele.style["filter"]=`alpha(opacity=${val*100})`;
        return;
    }
    return ele["style"][attr]=val;
}

// setCss(ele,attr,val)

// 批量设置css,遍历options里面所有的属性
// 需要注意的是：for in 循环只遍历可枚举的属性
//1、对象的私有属性是可枚举的
//2、浏览器内置的属性一般都是不可枚举的
//3、自己在原型上设置的属性是可枚举的，Object.Prototype.bbb=100;就可以遍历到


function setGroup(ele,options){
    for(var key in options){
        //只有这个属性是options的私有属性的时候，我们才遍历
        if(options.hasOwnProperty(key)){
            setCss(ele,key,options[key])
        }
    }
}

setGroup(outer,{
    width:"100px",
    height:"100px",
    background:"green"
})