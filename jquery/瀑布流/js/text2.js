/**
 * Created by Administrator on 2019/1/25.
 */
function waterfall(wrap,boxes){
    // 一个box的边框内距离 + 外边框距离
    var boxWidth = boxes[0].offsetWidth + 20
    // 整个页面的视觉宽度
    var windowWidth = document.documentElement.clientWidth;
    // 每行多少列
    var colsNumber = Math.floor(windowWidth / boxWidth);

    // 容器的宽度
    wrap.style.width = boxWidth * colsNumber + 'px';

    // 定义一个数组并存储每一列的高度
    var everyHeight = [];
    for (var i = 0; i < boxes.length; i++){
        if(i < colsNumber){
            // 一个box的边框内距高 + 外边框距离高
            everyHeight[i] = boxes[i].offsetHeight + 20;
        }else{
            var minHeight = Math.min.apply(null,everyHeight);
            var minIndex = getIndex(minHeight,everyHeight);
            // 10 是外边距
            var leftValue = boxes[minIndex].offsetLeft - 10;
            boxes[i].style.position = 'absolute';
            boxes[i].style.top = minHeight + 'px';
            boxes[i].style.left = leftValue + 'px';
            everyHeight[minIndex] += boxes[i].offsetHeight + 20;
        };


    }



};

window.onload = function(){
    // 容器
    var wrap = document.getElementById('wrap');
    //每一个小项
    var boxes = wrap.getElementsByTagName('div')

    waterfall(wrap,boxes);
}
// 获取最小列的索引
function getIndex(minHeight,everyHeight){
    for(index in everyHeight){
        if (everyHeight[index] == minHeight){
            return index;
        }
    }
}
window.onload = function(){
    var wrap = document.getElementById('wrap');
    var boxes = wrap.getElementsByTagName('div')
    waterfall(wrap,boxes);
};


