/**
 * Created by Administrator on 2019/1/25.
 */
/*
* 瀑布流的思想：把图片分成三列（ul 下面三个li，每个li代表一列）
* 每次再插入数据的时候，我们优先比较每列li的高度，把数据优先插入最低高度的li
*
*
* */

$(function(){
    var page=0;
    var imgData=null;
    // 1、先获取数据
    function queryDate(){
        page++;
        $.ajax({
            url:`json/data.json?${page}`,
            method:"get",
            async:false,
            dataType:"json",
            success:function(result){
                imgData=result;
            }
        })
    }

    queryDate();
   // 把数据插入到模板字符串
    function bindStemp({id,pic,message}={}){
     return ` <a href="">
            <img src="images/${pic}" alt="">
            <div class="message">${message}</div>
        </a>`
    }


    //2、获取li
   var $lists= $(".imgLists li");
   var listsAry=[].slice.call($lists);

   //遍历每个数据，
   for(var i=0;i<imgData.length;i+=3){
        console.log(i);
        // 存在的疑问是：listsAry 既然排完序了，但是并没反应到dom上，但是下面的listsAry[0],还是原来的
       listsAry.sort(function(a,b){
           return a.offsetHeight-b.offsetHeight;
       })
       console.log(listsAry)
       var item1=imgData[i];
       var item2=imgData[i+1];
       var item3=imgData[i+2];
       if(item1){
           listsAry[0].innerHTML+=bindStemp(item1);
       }
       if(item2){
           listsAry[1].innerHTML+=bindStemp(item2);
       }
       if(item3){
           listsAry[2].innerHTML+=bindStemp(item3);
       }

   }


})



