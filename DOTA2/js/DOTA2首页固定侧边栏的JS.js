function $(obj){return document.getElementById(obj)}
//获取相关的节点
//<a class="shouQi" id="shouQi">
//			<span id="shouQi_txt">收起</span>
//			<i id="shouQi_jianTou"></i>
//二级BOM事件
	$("shouQi").addEventListener('click',xx,false)
	function xx(){
		$("shouQi_txt").innerText='展开';
		$("shouQi_jianTou").style.backgroundPositionY='-54px';
		$('Hd_ce').style.right='-146px';		
		this.removeEventListener('click',xx,false)
		this.addEventListener('click',vv,false)
	}
	function vv(){
		$("shouQi_txt").innerText='收起';
		$("shouQi_jianTou").style.backgroundPositionY='-11px';
		$('Hd_ce').style.right='0px';
		this.removeEventListener('click',vv,false)
		this.addEventListener('click',xx,false)
	}
