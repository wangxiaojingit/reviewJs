/**
 * Created by Administrator on 2019/1/25.
 */
/*
* 瀑布流的思想，每次再插入数据的时候，先比较三列的高度，哪个高度最低，就把内容先给哪个li
*
* */

$(function(){
    var page=0;
    var imgData=null;
    //1、先获取数据
    function getDate(){
        page++;
        $.ajax({
            url:`json/data.json?page=${page}`,
            method:"get",
            async:false,
            dataType:"json",
            success:function(data){
                imgData=data;
            }
        })

    }
    getDate();
    //获取到数据之后，把数据先按照一定的顺序插入到页面，不然后面获取不到高度
    function render(imgData){
        for(var i=0;i<imgData.length;i++){
            var item=imgData[i];
            for(var j=0;j<3;j++){

            }
        }
    }
    //2、获取三列li
    var lists=$(".imgLists li");
    // 把lists 类数组转换为数组
    listsAry=[].slice.call(lists);
    //绑定数据
    function bindTemplate({id,pic,message}={}){
        if(typeof id=="undefined"){
            return "";
        }
        return `<a href="">
               <img src="images/${pic}" alt="">
               <div class="message">${message}</div>
           </a>`
    }
    //3、在循环数据的时候，我们每次循环，都要排列下li的顺序，把最高度最低的li优先插入数据
    for(let i=0;i<imgData.length;i+=3){
        //3个一组
        // item1 item2 itme3 是三条数据
        let item1=imgData[i];
        let item2=imgData[i+1];
        let item3=imgData[i+2];

        //排序dom
            listsAry.sort(function(a,b){
                console.log("a.offsetHeight:"+a.offsetHeight+"b.offsetHeight:"+b.offsetHeight)
                return a.offsetHeight-b.offsetHeight;
            })
            if(item1){
                listsAry[0].innerHTML+=bindTemplate(item1);
            }
            if(item2){
                listsAry[1].innerHTML+=bindTemplate(item2);
            }
            if(item3){
                listsAry[2].innerHTML+=bindTemplate(item3);
            }


    }

})