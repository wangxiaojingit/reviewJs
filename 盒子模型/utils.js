/**
 * Created by Administrator on 2019/1/18.
 */

var utils=(function(){
    //=> 获取一个元素到body的偏移量
    let offset=function (ele,attr) {
        var offsetLeft = ele.offsetLeft;
        var offsetTop = ele.offsetTop;
        var offsetParent = ele.offsetParent;

        while (offsetParent.tagName.toLowerCase() != "body") {
            offsetLeft += offsetParent.clientLeft + offsetParent.offsetLeft;
            offsetTop += offsetParent.clientTop + offsetParent.offsetTop;
            offsetParent = offsetParent.offsetParent;
        }
        return {
            offsetLeft,
            offsetTop
        }

    }
    //=> 获取兼容属性，body和html下的兼容属性
    let winHanddle=function(attr,value){
         if(typeof value!="undefined"){
            document.documentElement[attr]=value;
            document.body[attr]=value;
            return;
         }
        // 两个的顺序不能反
        return document.documentElement[attr]||document.body[attr];
    }
    return {
        offset,
        winHanddle
    }
})()