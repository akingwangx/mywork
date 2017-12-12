function $(obj) {
	return document.getElementById(obj)
};
var winH = document.documentElement.clientHeight;
var winW = document.documentElement.clientWidth;
$("div").onmousedown = function () {
	$("div").style.cursor = 'move';
	var x = event.clientX - $("div").offsetLeft;
	var y = event.clientY - $("div").offsetTop;
	var bb = true;
	document.onmousemove = function () {
		var xx = event.clientX - x;
		var yy = event.clientY - y;
		xx = Math.min(winW - $("div").offsetWidth, xx);
		xx = Math.max(xx, 0);
		yy = Math.min(winH - $("div").offsetHeight, yy);
		yy = Math.max(yy, 0)
		if (bb) {
			$("div").style.left = xx + 'px';
			$("div").style.top = yy + 'px';
		}
	}
	document.onmouseup = function () {
		$("div").style.cursor = 'pointer';
		bb = false;
	}
}
$("div").ondblclick = function () {
	window.open('../闹钟/闹钟.html', '小闹钟', 'width=600,height=500,top=100px,left=200px');
}
var $span = document.getElementById('time');
now_time();

function now_time() {
	var time = new Date();
	var week;
	var hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
	var min = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
	var sec = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
	var apm = hours < 12 ? "AM" : "PM";
	switch (time.getDay()) {
		case 0:
			week = "日";
			break;
		case 1:
			week = "一";
			break;
		case 2:
			week = "二";
			break;
		case 3:
			week = "三";
			break;
		case 4:
			week = "四";
			break;
		case 5:
			week = "五";
			break;
		case 6:
			week = "六";
			break;
	}
	$span.innerHTML = time.getFullYear() + '年' + (time.getMonth() + 1) + '月' + time.getDate() + '日' + hours + '：' + min + '：' + sec + ' ' + apm + ' 星期' + week;
	setTimeout(now_time, 1000);
}
document.onselectstart = function () {
	return false
}