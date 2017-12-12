function $(obj){return document.getElementById(obj)}
//获取图片的宽度
var width=$("imgs").children[0].offsetWidth
//获取所有的li
var lis=$("yellowBtn").children
//改变$("imgs")的定位值,每次-1920
var m=0;//起始盒子的左边值为0
var n=0;//给li的下标
var speen=5000;//运行的频率,数字越小运行越快
var timer;
//开始跑动
	run()
function run(){	
	li_();
	$("imgs").style.left=m+'px';
	n++;
	if (n>=lis.length) {
		n=0;
	}
	m=m-width;//每次减去图片的宽度
	//当m小于图片集合的宽度的时候m要赋值为0
	if (m<-($("imgs").offsetWidth-width)) {
		m=0;		
	}
	console.log(m)
	timer=setTimeout(run,speen)
}
//鼠标移入效果
for (var i=0;i<lis.length;i++) {
	lis[i].index=i;
	lis[i].onmouseenter=function(){
		clearTimeout(timer);		
		for (var j=0;j<lis.length;j++) {
			lis[j].style.backgroundPositionY='0px';
		}
		this.style.backgroundPositionY='-29px';		
		$("imgs").style.left=(-(parseInt(width))*(this.index))+'px';
		console.log((-(parseInt(width))*(this.index)))
	}	
	lis[i].onmouseleave=function(){
		timer=setTimeout(run,speen)
	}
}
//li随之变化的函数
function li_(){
	for (var i=0;i<lis.length;i++) {
		lis[i].style.backgroundPositionY='0px';	
	}
	lis[n].style.backgroundPositionY='-29px';	
}