/**
 * Created by Administrator on 2019/1/25.
 */
$(function(){
    var waterfall=(function($){

        function render(){
            //获取div元素的宽度
            var elWidth=$('.item').outerWidth(true),
                //计算得到一列放置div的数量
                colNum=parseInt($(window).width()/elWidth),
                //设置空数组，来存放每一列div的高度
                colSumHeight=[];

            //遍历空数组，添加元素，并把每一列div的高度设置为0
            //等同于colSumHeight=[0,0,0,0,0]
            for(var i=0;i<colNum;i++){
                colSumHeight.push(0);
            }

            //遍历所有的div,通过在函数计算出每一列的高度
            //找出高度之和最小的一列div,接着一次按照这个方法
            //把所有的div摆放完毕
            $('.item').each(function(){
                var $cur=$(this);

                var idx=0,
                    minSumHeight=colSumHeight[0];

                for(var i=0;i<colSumHeight.length;i++){
                    if(colSumHeight[i]<minSumHeight){
                        idx=i;
                        minSumHeight=colSumHeight[i];
                    }
                }
                $cur.css({
                    left:idx*elWidth,
                    top:minSumHeight
                });
                colSumHeight[idx]=$cur.outerHeight(true)+colSumHeight[idx];
            })
        }
        render()

        //当浏览器窗口缩放时，重新放置计算一列放置div的数量
        $(window).on('resize',function(){
            render();
        })
        return{
            init:render
        }
    })(jQuery)
    waterfall.init();

})