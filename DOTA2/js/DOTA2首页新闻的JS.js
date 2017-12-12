function $(obj){return document.getElementById(obj)}
//获取新闻头部子元素li的集合
var li=$("news_nav").children;
//获取新闻内容子元素div的集合
var div=$("news_neiRong").children;
for (var i=0;i<li.length;i++) {
	li[i].index=i;
	li[i].onmouseenter=function(){
		for (var i=0;i<li.length;i++) {
			li[i].style.backgroundPositionY='0px';
			div[i].style.display='none';
		}
		this.style.backgroundPositionY='41px';
		div[this.index].style.display='block';
	}
}