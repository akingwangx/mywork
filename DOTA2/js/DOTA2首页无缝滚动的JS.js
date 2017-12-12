var speed=9; //数字越大速度越慢
    var tab=document.getElementById("demo");
    var tab1=document.getElementById("demo1");
    var tab2=document.getElementById("demo2");
    var box=document.getElementById("indemo");
    tab2.innerHTML=tab1.innerHTML;
    //向左无缝滚动
    function MarqueeRight(){
	    if(tab.scrollLeft<=0){
		    tab.scrollLeft+=tab2.offsetWidth
		}else{
		    tab.scrollLeft--
	    }		
    }
    var timRight=setInterval(MarqueeRight,speed)
    
    tab.onmouseenter=function(){
    	clearInterval(timRight)
	}
	tab.onmouseleave=function() {
		timRight=setInterval(MarqueeRight,speed);
	}
//	获取所有的a标签
	var $a=box.getElementsByTagName('a')
//	获取所有的img标签
	var $img=box.getElementsByTagName('img')
//循环所有的a和img
	for (var i=0;i<$a.length;i++) {
		$a[i].index=i;
		$a[i].onmouseenter=function(){
			this.style.width='250px';
			$img[this.index].style.width='250px';
			$img[this.index].setAttribute('position','relative');
			$img[this.index].setAttribute('z-index','999');
		}
		$a[i].onmouseleave=function(){
			for (var i=0;i<$a.length;i++) {
				$a[i].style.width='206px';
				$img[i].style.width='206px';
				$img[i].removeAttribute('position');
				$img[i].removeAttribute('z-index');
			}
		}
	}