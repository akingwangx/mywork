function $(obj){return document.getElementById(obj)};
//手机号码
$("shoujihaoma").onfocus=function(){
	$("shoujihaoma_father").style.borderColor='white';
}
$("shoujihaoma").onblur=$shoujihaoma;
function $shoujihaoma(){
	$("shoujihaoma_father").style.borderColor='';
		//规则，11位数字，必须1-9开头
	var pattern=/^[1-9][\d]{10}$/gi;
	var kk=pattern.test($("shoujihaoma").value);
	if($("shoujihaoma").value!=''){
		if (kk) {
			$("shoujihaoma_span").style.display='block';
			$("shoujihaoma_span").innerText='手机号码可用';
			$("shoujihaoma_span").className='yes';
			return true;
		} else{
			$("shoujihaoma_span").style.display='block';
			$("shoujihaoma_span").innerText='手机号码格式不正确!';
			$("shoujihaoma_span").className='no';
			return false;
		}
	}else{
		$("shoujihaoma_span").style.display='block';
		$("shoujihaoma_span").innerText='不能为空!';
		$("shoujihaoma_span").className='no';
		return false;
	}
}
//邮箱的验证
$("youxiang").onfocus=function(){
	$("youxiang_father").style.borderColor='white';
}
$("youxiang").onblur=$shouji;
function $shouji(){
	$("youxiang_father").style.borderColor='';
		//必须以小写字母开头，并且必须包含@与.
	var pattern=/^[a-z][\w\-\.]+@[\w]+\.(com|cn)$/g;
	var kk=pattern.test($("youxiang").value);
	if($("youxiang").value!=''){
		if (kk) {
			$("youxiang_span").style.display='block';
			$("youxiang_span").innerText='此邮箱可用';
			$("youxiang_span").className='yes';
			return true;
		} else{
			$("youxiang_span").style.display='block';
			$("youxiang_span").innerText='邮箱格式不正确!';
			$("youxiang_span").className='no';
			return false;
		}
	}else{
		$("youxiang_span").style.display='block';
		$("youxiang_span").innerText='不能为空!';
		$("youxiang_span").className='no';
		return false;
	}
}
//密码
$("mima").onfocus=function(){
	$("mima_father").style.borderColor='white';
}
$("mima").onblur=$mima;
function $mima(){
	$("mima_father").style.borderColor='';
	$("pingFen").style.display='block';
	
		//规则，6-16位英文字母及数字;
	var pattern=/^[a-z0-9][\w]{5,15}$/gi;
	var kk=pattern.test($("mima").value);
	if($("mima").value!=''){

		if (kk) {
			$("mima_span").style.display='none';			
				var level=-1
			if(/[a-z]/i.test($("mima").value)){level++;}
			if(/[0-9]/i.test($("mima").value)){level++;}
			//开头有6位字母的时候
			if(/^[a-z]{5,9}/i.test($("mima").value)){level++;}			
			if (level==0) {
				$("qiangdu").children[0].id="pass_no";
				$("qiangdu").children[1].id="";
				$("qiangdu").children[2].id="";
			}
			if (level==1) {
				$("qiangdu").children[0].id="";
				$("qiangdu").children[1].id="pass_no";
				$("qiangdu").children[2].id="";
			}
			if (level==2) {
				$("qiangdu").children[0].id="";
				$("qiangdu").children[1].id="";
				$("qiangdu").children[2].id="pass_no";
			}
			return true;
		} else{
			$("mima_span").style.display='block';
			$("mima_span").innerText='密码格式不正确!';
			return false;
		}
	}else{
		$("mima_span").style.display='block';
		$("mima_span").innerText='不能为空!';
		return false;
	}
}
//密码2
$("mima2").onfocus=function(){
	$("mima2_father").style.borderColor='white';
}
$("mima2").onblur=function(){
	$("mima2_father").style.borderColor='';
	if ($("mima2").value==$("mima").value) {
		$("mima2_span").style.display='none';
		return true;
	}else{$("mima2_span").style.display='block';return false;}
}
//真实姓名
$("xingming").onfocus=function(){
	$("xingming_father").style.borderColor='white';
}
$("xingming").onblur=$name;
function $name(){
	$("xingming_father").style.borderColor='';
		//规则，11位数字，必须1-9开头
	if ($("xingming").value=='') {
		$("xingming_span").style.display='block';
		return false;
	}else{$("xingming_span").style.display='none';return true;}
}
//身份证号码
$("shenfenzheng").onfocus=function(){
	$("shenfenzheng_father").style.borderColor='white';
}
$("shenfenzheng").onblur=$shenfenzheng;
function $shenfenzheng(){
	$("shenfenzheng_father").style.borderColor='';
		//规则，必须是我的身份证
	var pattern=/612527199302135618/gi;
	var kk=pattern.test($("shenfenzheng").value);
	if($("shenfenzheng").value!=''){
		if (kk) {
			$("shenfenzheng_span").style.display='block';
			$("shenfenzheng_span").innerText='身份证号码可用';
			$("shenfenzheng_span").className='yes';
			return true;
		}else{
			$("shenfenzheng_span").style.display='block';
			$("shenfenzheng_span").innerText='身份证格式不正确!';
			return false;
		}
	}else{
		$("shenfenzheng_span").style.display='block';
		$("shenfenzheng_span").innerText='不能为空!';
		return false;
	}
}
$("sub").onclick=function(){
		if($shoujihaoma() && $mima() && $name() && $shenfenzheng()){
			alert('提交成功');
		}else{
			alert('提交失败，内容有误!!!')
			$("shenfenzheng").value='';
			$("xingming").value='';
			$("mima2").value='';
			$("mima").value='';
			$("youxiang").value='';
			$("shoujihaoma").value='';
		}
	}
//点击邮箱的时候邮箱变为block,手机号码变为none
var zhuCe_xvanZe=document.getElementsByClassName("zhuCe_xvanZe")[0];
var a_1=zhuCe_xvanZe.children[0];
var a_2=zhuCe_xvanZe.children[1];
a_1.onclick=function shoujizhuce(){
	a_1.id="cur";
	a_2.id="";
	$("youxiang_father").style.display='none'
	$("shoujihaoma_father").style.display='block'
	$("shenfenzheng").value='';
	$("xingming").value='';
	$("mima2").value='';
	$("mima").value='';
	$("youxiang").value='';
	$("shoujihaoma").value='';
}
a_2.onclick=function youxiangzhuce(){
	a_2.id="cur";
	a_1.id="";
	$("shoujihaoma_father").style.display='none';
	$("youxiang_father").style.display='block';
	$("shenfenzheng").value='';
	$("xingming").value='';
	$("mima2").value='';
	$("mima").value='';
	$("youxiang").value='';
	$("shoujihaoma").value='';	
}
//自己的恶搞
$("meichangliang_btn").onclick=function(){
	if ($("shoujihaoma2").value=='15309140739'&&$('mima_2').value=='asdasd55555'&&$("xingming2").value=='王鑫'&&$("shenfenzheng2").value=='612527199302135618') {
		alert('符合要求,点击确定你可以开始玩游戏了。\n说,你为什么知道的这么多!(╯‵□′)╯炸弹！•••*～●')
		window.open('../../../小游戏/小游戏主页.html','小游戏主页','width=500,height=500,top=200px,left=800px')		
	}else{
		alert('这不是作者的正确信息,\n你跟作者不熟是吧!!(ノ｀Д)ノ┻━┻')
		alert('游戏不给你玩了,给你个计算玩玩吧!')
window.open('../../../小游戏/王鑫做的计算器.html','王鑫做的计算器','width=500,height=500,top=200px,left=800px')
		}
}














