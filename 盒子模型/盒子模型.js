/**
 * Created by Administrator on 2019/1/14.
 */


/*
*  1、client： content部分+padding的部分
*    clientWidth
*    clientHeight
*    clientTop:上边框的border
*    clientLeft:左边框的border
*
 *2、 offset：content+padding+border的部分
 *
 * offsetWidth
 * offsetHeight
 * offsetLeft：离参照物的左偏移量
 * offsetTop：离参照物的上偏移量
 * offsetParent：参照物
 *
 * 3、scroll: scrollHeight:真实内容的高度+上padding的高度
 *    scrollWidth
 *    scrollHeight
 *    scrollLeft:滚动条卷去的宽度
 *    scrollTop：滚动条卷去的高度
 *
 *    scrollTop的最小高度是0，(当滚动条在顶部的时候，没有一点距离)
 *    scrollTop超过一屏的时候：scrollTop 的值等于下面的
 *    document.documentElement.scrollHeight||document.body-document.documentElement.clientWidth||document.body.clientWidth
 *
 *
 *  在13个属性中，只有scrollTop和scrollLeft 是可读的属性，其余的都是可读的。
 *
 *
* */


//如果想要获取元素的outer.style.width 样式，除非写到行内式，要不然这种方式获取不到。不管是不是行内，我们都获取到，我们就要用window.getComputedStyle(ele,null)[attr],(ie8以上的浏览器)，如果要兼容ie就用ele.currentStyle["attr"]

//  获取样式兼容性写法

function getStyle(ele,attr){
   if(window.getComputedStyle){
       return getComputedStyle(ele,null)[attr]
   }
   return ele.currentStyle[attr];
}

getStyle(outer,"width");