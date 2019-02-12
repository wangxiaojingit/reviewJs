/**
 * Created by Administrator on 2019/1/25.
 */

window.onload=function(){
    render();
}

$(window).resize(function(){
    render();
})
// window.onresize=function(){
//     render();
// }
function getIndex(value,hcolAry){
    for(var i=0;i<hcolAry.length;i++){
        if(hcolAry[i]==value){
            return i;
        }
    }

}

function render(){
    //页面加载完之后，获取整个屏幕的宽度
    var winW=document.documentElement.clientWidth||document.body.clientWidth;

    var $items=$("#wraper .item");
    var itemsAry=[].slice.call($items);
    var itemNum=itemsAry.length;
    var itemW=$items[0].offsetWidth;
    //计算出应有的个数
    var itemNum=Math.floor((winW-60)/itemW);
    //动态计算wraper的宽度
    $("#wraper").css("width",itemNum*itemW+"px");
    var hcolAry=new Array(itemNum);

    for(var i=0;i<itemsAry.length;i++){
        if(i<itemNum){
            hcolAry[i]=itemsAry[i].offsetHeight;
        }else{
            // 计算hcolAry中最矮的
            var minHcol=Math.min.apply(null,hcolAry);
            //获取最小的列索引
            var minIndex=getIndex(minHcol,hcolAry);
            //找到应该插入到最小的列中
            itemsAry[i].style.position="absolute";
            itemsAry[i].style.top=hcolAry[minIndex]+"px";
            itemsAry[i].style.left=itemsAry[minIndex].offsetLeft+"px";
            hcolAry[minIndex]=hcolAry[minIndex]+itemsAry[i].offsetHeight;
        }
    }
}