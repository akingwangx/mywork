//获取相关节点
var zhong=document.getElementById("jiantizhongwen");
var ying=document.getElementById("yingwen");
var z_body=document.getElementById("chinese");
var y_body=document.getElementById("english");
//点击操作
zhong.onclick=function(){
	y_body.style.display='none';
	z_body.style.display='block';
}
ying.onclick=function(){
	z_body.style.display='none';
	y_body.style.display='block';
}