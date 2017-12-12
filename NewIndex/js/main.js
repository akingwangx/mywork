window.onload = function () {

    //菜单下拉and收起

    //选取所有需要下拉的li
    var ali = document.getElementById("nav").children[0].children;
    //遍历该li数组 
    for (var i = 0; i < ali.length; i++) {
        bao(ali[i]);
    }

    function bao(obj) {
        //取下拉菜单元素
        var ul = obj.lastElementChild;
        //赋初始值
        ul.style.height = "0px";
        //取实际菜单元素实际高度！
        var oheight = ul.scrollHeight;
        var t;
        //移入事件
        obj.onmouseenter = function () {
            t = "open";
            open();
            //移入后样式稍微调整，想把菜单字变成白色没成功
            ul.style.marginLeft = "-10px";
            obj.style.backgroundColor = "#0365AC";
            obj.style.zIndex = "2";

            function open() {
                //得到目前的菜单高度，变化后再赋给下拉菜单
                var nowheight = parseFloat(ul.style.height);
                nowheight += 3;
                ul.style.height = nowheight + "px";
                if (nowheight < oheight) {
                    if (t == "open") {
                        setTimeout(open, 1);
                    }
                } else {
                    ul.style.height = oheight + "px";
                }
            }
        }
        obj.onmouseleave = function () {
            t = "close";
            close();
            obj.style.backgroundColor = "#fff";

            function close() {
                var nowheight = parseFloat(ul.style.height);
                nowheight -= 3;
                ul.style.height = nowheight + "px";
                if (nowheight > 0) {
                    if (t == "close") {
                        setTimeout(close, 1);
                    } else {
                        ul.style.height = "0px";
                    }
                }
            }
        }
    }

    //        轮播
    function $(obj) {
        return document.getElementById(obj)
    }
    //获取图片的宽度
    var width = $("imgs").children[0].offsetWidth
    //获取所有的li
    var lis = $("yellowBtn").children
    //改变$("imgs")的定位值,每次-1920
    var m = 0; //起始盒子的左边值为0
    var n = 0; //给li的下标
    var speen = 5000; //运行的频率,数字越小运行越快
    var timer;
    //开始跑动
    run();

    function run() {
        li_();
        $("imgs").style.left = m + 'px';
        n++;
        if (n >= lis.length) {
            n = 0;
        }
        m = m - width; //每次减去图片的宽度
        //当m小于图片集合的宽度的时候m要赋值为0
        if (m < -($("imgs").offsetWidth - width)) {
            m = 0;
        }
        console.log(m)
        timer = setTimeout(run, speen)
    }
    //鼠标移入效果
    for (var i = 0; i < lis.length; i++) {
        lis[i].index = i;
        lis[i].onmouseenter = function () {
            clearTimeout(timer);
            for (var j = 0; j < lis.length; j++) {
                lis[j].style.backgroundPositionY = '0px';
            }
            this.style.backgroundPositionY = '-29px';
            $("imgs").style.left = (-(parseInt(width)) * (this.index)) + 'px';
            console.log((-(parseInt(width)) * (this.index)))
        }
        lis[i].onmouseleave = function () {
            timer = setTimeout(run, speen)
        }
    }
    //li随之变化的函数
    function li_() {
        for (var i = 0; i < lis.length; i++) {
            lis[i].style.backgroundPositionY = '0px';
        }
        lis[n].style.backgroundPositionY = '-29px';
    }




}