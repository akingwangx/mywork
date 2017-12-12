 window.onload=function(){
 	 mui.previewImage();

        mui.plusReady(function() {
            getaData();
        })
        // 获取数据
        function getaData() {
            var table = document.body.querySelector('.mui-table-view');
            var timestamp = getDataStr();
            mui.ajax(baseUrl, {
                data: {
                    key: '',
                    typeId: '',
                    showapi_appid: appid,
                    showapi_sign: sign,
                    showapi_timestamps: timestamp,
                    page:1
                },
                dataType: 'json',
                type: 'post',  
                timeout: 10000,
                beforeSend: function(data) {
                    plus.nativeUI.showWaiting(); 
                },
                success: function(data) {
                    plus.nativeUI.closeWaiting();  
                    if (data.showapi_res_code == 0) {
                        console.log("imageView成功");
                        var dice1 = data.showapi_res_body;
                        var dice2 = dice1.pagebean;
                        table.innerHTML = '';
                        for (var i = 0; i < dice2.contentlist.length - 1; i = i + 2) {
                            var item1 = dice2.contentlist[i];
                            var item2 = dice2.contentlist[i + 1];
//                          console.log(item1.contentImg);
                            var li = document.createElement('li');
                            li.className = 'image-li'; 
                            li.innerHTML = '<img class="leftImage" src="'+ item1.contentImg + '" data-preview-src="" data-preview-group="1" />'
                                        + '<img class="rightImage" src="'+ item2.contentImg + '" data-preview-src="" data-preview-group="1" />';
                            table.appendChild(li, table.firstChild);
                        }
                    }
                },
                error: function(xhr, type, errerThrown) {
                    mui.toast('网络异常,请稍候再试');
                    plus.nativeUI.closeWaiting();  
                }
            });
        }   


 }
 
 