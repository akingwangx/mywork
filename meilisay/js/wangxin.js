window.onload = function () {
  //搜索栏下面隔一个变色
  function fontS() {
    var ahot = document.getElementById("hotword").children;
    for (var i = 0; i < ahot.length; i++) {
      if (i % 2 == 0) {
        ahot[i].style.color = "#f36";
      } else {
        ahot[i].style.color = "#666";
      }
    }
  }
  fontS(); 
  //滑动后固定导航栏
  var _top=$("#onav").offset().top;
  $(window).scroll(function (event) {
       if ($(window).scrollTop() >= 22) {
            $("#onav").addClass("fix");
       }
       else
           $("#onav").removeClass("fix");
        });

      function bb(){
        var jiage=document.getElementsByClassName("jiage");
        var cars=document.getElementById("cars");
        jiage[0].onmouseenter=function(){
          cars.style.display="block";
        }
        cars.onmouseleave=function(){
          cars.style.display="none";
        }
      }
    bb();
}