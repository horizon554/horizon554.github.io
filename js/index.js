(function($) {
        var sdkList={
            "iOS":[
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.2.0",
                	"demo":"./xdsdk_docs/iOS/V3.2.0/xd_doc_ios.html",
                	"sdk":"./xdsdk_docs/iOS/V3.2.0/xd_doc_ios.html",
                	"doc":"./xdsdk_docs/iOS/V3.2.0/xd_doc_ios.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.1.2",
                    "demo":"./xdsdk_docs/iOS/V3.1.2/xd_doc_ios.html",
                    "sdk":"./xdsdk_docs/iOS/V3.1.2/xd_doc_ios.html",
                    "doc":"./xdsdk_docs/iOS/V3.1.2/xd_doc_ios.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.1.1",
                    "demo":"./xdsdk_docs/iOS/V3.1.1/xd_doc_ios.html",
                    "sdk":"./xdsdk_docs/iOS/V3.1.1/xd_doc_ios.html",
                    "doc":"./xdsdk_docs/iOS/V3.1.1/xd_doc_ios.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.0.0",
                    "demo":"./xdsdk_docs/iOS/V3.0.0/XDSDK_Demo.zip",
                    "sdk":"./xdsdk_docs/iOS/V3.0.0/XDSDK-iOS-3.0.0-20170706.zip",
                    "doc":"./xdsdk_docs/iOS/V3.0.0/xd_doc_ios.html"
                },],

            "Android":[
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.2.0",
                    "demo":"./xdsdk_docs/Android/V3.2.0/xd_doc_android.html",
                    "sdk":"./xdsdk_docs/Android/V3.2.0/xd_doc_android.html",
                    "doc":"./xdsdk_docs/Android/V3.2.0/xd_doc_android.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.1.3",
                    "demo":"./xdsdk_docs/Android/V3.1.3/xd_doc_android.html",
                    "sdk":"./xdsdk_docs/Android/V3.1.3/xd_doc_android.html",
                    "doc":"./xdsdk_docs/Android/V3.1.3/xd_doc_android.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.1.2",
                    "demo":"./xdsdk_docs/Android/V3.1.2/xd_doc_android.html",
                    "sdk":"./xdsdk_docs/Android/V3.1.2/xd_doc_android.html",
                    "doc":"./xdsdk_docs/Android/V3.1.2/xd_doc_android.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"3.1.1",
                    "demo":"./xdsdk_docs/Android/V3.1.1/xd_doc_android.html",
                    "sdk":"./xdsdk_docs/Android/V3.1.1/xd_doc_android.html",
                    "doc":"./xdsdk_docs/Android/V3.1.1/xd_doc_android.html"
                },],

            "Unity3d":[
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"1.0.8",
                    "demo":"./xdsdk_docs/Unity/V1.0.8/XDSDK-Unity3d.html",
                    "sdk":"./xdsdk_docs/Unity/V1.0.8/XDSDK-Unity3d.html",
                    "doc":"./xdsdk_docs/Unity/V1.0.8/XDSDK-Unity3d.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"1.0.1",
                    "demo":"./xdsdk_docs/Unity/V1.0.1/XDSDK-Unity3d.html",
                    "sdk":"./xdsdk_docs/Unity/V1.0.1/XDSDK-Unity3d.html",
                    "doc":"./xdsdk_docs/Unity/V1.0.1/XDSDK-Unity3d.html"
                },
                {
                	"time":"2017-9-17",
                	"size":"2.01M",
                	"version":"1.0.0",
                    "demo":"./xdsdk_docs/Unity/V1.0.0/XDSDK-Unity3d.html",
                    "sdk":"./xdsdk_docs/Unity/V1.0.0/XDSDK-Unity3d.html",
                    "doc":"./xdsdk_docs/Unity/V1.0.0/XDSDK-Unity3d.html"
                },],
        };

    for(var item in sdkList){
        var str="";
        for(var i in sdkList[item]){
            str+="<tr>"+
                    "<td>"+sdkList[item][i].time+"</td>"+
                    "<td>"+sdkList[item][i].size+"</td>"+
                    "<td>"+sdkList[item][i].version+"</td>"+
                    "<td><a href=\""+sdkList[item][i].demo+"\"target=\"_blank\">Demo</a></td>"+
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