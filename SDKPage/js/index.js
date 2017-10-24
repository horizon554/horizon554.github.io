(function($) {
        var sdkList={
            "ios":[
                {"time":"2017-9-17","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-17","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-17","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-17","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"}
                ],
            "android":[
                {"time":"2017-9-18","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-18","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-18","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-18","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"}
            ],
            "unity3d":[
                {"time":"2017-9-19","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-19","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-19","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"},
                {"time":"2017-9-19","size":"2.01M","version":"3.1.3","demo":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","sdk":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip","doc":"http://qzonestyle.gtimg.cn/qzone/vas/opensns/res/doc/iOS_SDK_V3.3.0_lite.zip"}
            ]
        };

    for(var item in sdkList){
        var str="";
        for(var i in sdkList[item]){
            str+="<tr>"+
                    "<td>"+sdkList[item][i].time+"</td>"+
                    "<td>"+sdkList[item][i].size+"</td>"+
                    "<td>"+sdkList[item][i].version+"</td>"+
                    "<td><a href=\""+sdkList[item][i].demo+"\"target=\"_blank\">demo</a></td>"+
                    "<td><a class=\"text-sdk\" href=\""+sdkList[item][i].sdk+"\"target=\"_blank\">"+item+"_SDK</a></td>"+
                    "<td><a href=\""+sdkList[item][i].doc+"\"target=\"_blank\">查看文档</a></td>"+
                "</tr>"
        }
        $("."+item+"-wrapper tbody").append(str);
    }
    $(".pill").on("click",function () {
        if($(this).hasClass('active')){
            return false;
        }
        $(".pill").removeClass('active');
        $(".table-wrapper").removeClass('active')
        $(this).addClass('active');
        $($(this).data("wrap")).addClass('active');
    })
})(jQuery);