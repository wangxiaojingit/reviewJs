var utils=(function(){
      var getCss=function(ele,attr,value){
          if(arguments.length<=2){
            if(window.getComputedStyle){
              return Number.parseFloat(window.getComputedStyle(ele,null)[attr])
            }
            return Number.parseFloat(ele.currentStyle[attr]);
          }else{
            return ele["style"][attr]=value;
          }

      }
      return {
        getCss
      }
})()
