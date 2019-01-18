(function($) {
    var sdkList = {
        "iOS": [
            {
                "time": "2018-12-29",
                "size": "16.8M",
                "version": "3.2.26",
                "demo": "./xdsdk_docs/iOS/V3.2.26/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.26/XDSDK-iOS-3.2.26-20181229.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.26/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
            },
            {
                "time": "2018-12-20",
                "size": "16.1M",
                "version": "3.2.25",
                "demo": "./xdsdk_docs/iOS/V3.2.25/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.25/XDSDK-iOS-3.2.25-20181220.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.25/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
            },
            {
                "time": "2018-11-29",
                "size": "16.1M",
                "version": "3.2.24",
                "demo": "./xdsdk_docs/iOS/V3.2.24/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.24/XDSDK-iOS-3.2.24-20181129.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.24/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
            },
            {
                "time": "2018-11-27",
                "size": "8.4M",
                "version": "3.2.23",
                "demo": "./xdsdk_docs/iOS/V3.2.23/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.23/XDSDK-iOS-3.2.23-20181127.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.23/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
            },
            {
                "time": "2018-09-25",
                "size": "8.4M",
                "version": "3.2.22",
                "demo": "./xdsdk_docs/iOS/V3.2.22/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.22/XDSDK-iOS-3.2.22-20180925.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.22/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
            },
        {
                "time": "2018-08-03",
                "size": "8.4M",
                "version": "3.2.21",
                "demo": "./xdsdk_docs/iOS/V3.2.21/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.21/XDSDK-iOS-3.2.21-20180803.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.21/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-07-24",
                "size": "8.1M",
                "version": "3.2.20",
                "demo": "./xdsdk_docs/iOS/V3.2.20/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.20/XDSDK-iOS-3.2.20-20180724.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.20/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-07-17",
                "size": "8.1M",
                "version": "3.2.19",
                "demo": "./xdsdk_docs/iOS/V3.2.19/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.19/XDSDK-iOS-3.2.19-20180717.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.19/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-07-04",
                "size": "8.1M",
                "version": "3.2.18",
                "demo": "./xdsdk_docs/iOS/V3.2.18/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.18/XDSDK-iOS-3.2.18-20180704.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.18/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-06-15",
                "size": "8.1M",
                "version": "3.2.17",
                "demo": "./xdsdk_docs/iOS/V3.2.17/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.17/XDSDK-iOS-3.2.17-20180615.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.17/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-05-15",
                "size": "8.1M",
                "version": "3.2.16",
                "demo": "./xdsdk_docs/iOS/V3.2.16/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.16/XDSDK-iOS-3.2.16-20180515.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.16/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-05-03",
                "size": "7.2M",
                "version": "3.2.15",
                "demo": "./xdsdk_docs/iOS/V3.2.15/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.15/XDSDK-iOS-3.2.15-20180503.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.15/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-04-20",
                "size": "7.2M",
                "version": "3.2.14",
                "demo": "./xdsdk_docs/iOS/V3.2.14/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.14/XDSDK-iOS-3.2.14-20180420.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.14/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },
        {
                "time": "2018-03-09",
                "size": "6.5M",
                "version": "3.2.13",
                "demo": "./xdsdk_docs/iOS/V3.2.13/XDSDK_Demo.zip",
                "sdk": "./xdsdk_docs/iOS/V3.2.13/XDSDK-iOS-3.2.13-20180309.zip",
                "doc": "./xdsdk_docs/iOS/V3.2.13/xd_doc_ios.html",
                "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-02-23",
            "size": "6.5M",
            "version": "3.2.12",
            "demo": "./xdsdk_docs/iOS/V3.2.12/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.12/XDSDK-iOS-3.2.12-20180223.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.12/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-02-06",
            "size": "6.5M",
            "version": "3.2.11",
            "demo": "./xdsdk_docs/iOS/V3.2.11/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.11/XDSDK-iOS-3.2.11-20180206.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.11/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-01-30",
            "size": "6.5M",
            "version": "3.2.10",
            "demo": "./xdsdk_docs/iOS/V3.2.10/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.10/XDSDK-iOS-3.2.10-20180130.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.10/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-01-29",
            "size": "6.5M",
            "version": "3.2.9",
            "demo": "./xdsdk_docs/iOS/V3.2.9/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.9/XDSDK-iOS-3.2.9-20180129.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.9/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-01-29",
            "size": "6.5M",
            "version": "3.2.8",
            "demo": "./xdsdk_docs/iOS/V3.2.8/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.8/XDSDK-iOS-3.2.8-20180129.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.8/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-01-19",
            "size": "5.8M",
            "version": "3.2.7",
            "demo": "./xdsdk_docs/iOS/V3.2.7/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.7/XDSDK-iOS-3.2.7-20180119.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.7/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2018-01-08",
            "size": "5.8M",
            "version": "3.2.6",
            "demo": "./xdsdk_docs/iOS/V3.2.6/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.6/XDSDK-iOS-3.2.6-20180108.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.6/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2017-12-27",
            "size": "5.8M",
            "version": "3.2.5",
            "demo": "./xdsdk_docs/iOS/V3.2.5/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.5/XDSDK-iOS-3.2.5-20171227.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.5/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2017-12-19",
            "size": "5.7M",
            "version": "3.2.4",
            "demo": "./xdsdk_docs/iOS/V3.2.4/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.4/XDSDK-iOS-3.2.4-20171219.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.4/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2017-12-14",
            "size": "5.7M",
            "version": "3.2.3",
            "demo": "./xdsdk_docs/iOS/V3.2.3/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.3/XDSDK-iOS-3.2.3-20171214.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.3/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2017-12-12",
            "size": "5.7M",
            "version": "3.2.2",
            "demo": "./xdsdk_docs/iOS/V3.2.2/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.2/XDSDK-iOS-3.2.2-20171212.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.2/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2017-11-27",
            "size": "5.7M",
            "version": "3.2.1",
            "demo": "./xdsdk_docs/iOS/V3.2.1/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.1/XDSDK-iOS-3.2.1-20171127.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.1/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },{
            "time": "2017-10-18",
            "size": "5.7M",
            "version": "3.2.0",
            "demo": "./xdsdk_docs/iOS/V3.2.0/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.2.0/XDSDK-iOS-3.2.0-20171018.zip",
            "doc": "./xdsdk_docs/iOS/V3.2.0/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        }, {
            "time": "2017-11-01",
            "size": "5.7M",
            "version": "3.1.8",
            "demo": "./xdsdk_docs/iOS/V3.1.8/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.1.8/XDSDK-iOS-3.1.8-20171101.zip",
            "doc": "./xdsdk_docs/iOS/V3.1.8/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        },, {
            "time": "2017-09-27",
            "size": "5.7M",
            "version": "3.1.7",
            "demo": "./xdsdk_docs/iOS/V3.1.7/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.1.7/XDSDK-iOS-3.1.7-20170927.zip",
            "doc": "./xdsdk_docs/iOS/V3.1.7/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        }, {
            "time": "2017-09-19",
            "size": "5.6M",
            "version": "3.1.6",
            "demo": "./xdsdk_docs/iOS/V3.1.6/XDSDK_Demo.zip",
            "sdk": "./xdsdk_docs/iOS/V3.1.6/XDSDK-iOS-3.1.6-20170919.zip",
            "doc": "./xdsdk_docs/iOS/V3.1.6/xd_doc_ios.html",
            "changeLog": "./xdsdk_docs/iOS/CHANGELOG.html"
        }],

        "Android": [{
            "time": "2018-12-28",
            "size": "5.2M",
            "version": "3.2.13",
            "demo": "https://res.xdcdn.net/xdsdk/Android/3.2.13/Demo.zip",
            "sdk": "https://res.xdcdn.net/xdsdk/Android/3.2.13/XDSDK-Android-3.2.13.zip",
            "doc": "./xdsdk_docs/Android/V3.2.13/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2018-08-02",
            "size": "5.2M",
            "version": "3.2.11",
            "demo": "./xdsdk_docs/Android/V3.2.11/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.11/XDSDK-Android-3.2.11.zip",
            "doc": "./xdsdk_docs/Android/V3.2.11/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2018-07-20",
            "size": "5.2M",
            "version": "3.2.9",
            "demo": "./xdsdk_docs/Android/V3.2.9/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.9/XDSDK-Android-3.2.9.zip",
            "doc": "./xdsdk_docs/Android/V3.2.9/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2018-06-20",
            "size": "5.2M",
            "version": "3.2.8",
            "demo": "./xdsdk_docs/Android/V3.2.8/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.8/XDSDK-Android-3.2.8.zip",
            "doc": "./xdsdk_docs/Android/V3.2.8/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2018-03-09",
            "size": "5.2M",
            "version": "3.2.7",
            "demo": "./xdsdk_docs/Android/V3.2.7/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.7/XDSDK-Android-3.2.7.zip",
            "doc": "./xdsdk_docs/Android/V3.2.7/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2018-02-23",
            "size": "5.2M",
            "version": "3.2.6",
            "demo": "./xdsdk_docs/Android/V3.2.6/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.6/XDSDK-Android-3.2.6.zip",
            "doc": "./xdsdk_docs/Android/V3.2.6/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2017-12-27",
            "size": "5.2M",
            "version": "3.2.2",
            "demo": "./xdsdk_docs/Android/V3.2.2/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.2/XDSDK-Android-3.2.2.zip",
            "doc": "./xdsdk_docs/Android/V3.2.2/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2017-12-21",
            "size": "5.2M",
            "version": "3.2.1",
            "demo": "./xdsdk_docs/Android/V3.2.1/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.1/XDSDK-Android-3.2.1.zip",
            "doc": "./xdsdk_docs/Android/V3.2.1/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        },{
            "time": "2017-10-19",
            "size": "5.2M",
            "version": "3.2.0",
            "demo": "./xdsdk_docs/Android/V3.2.0/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.2.0/XDSDK-Android-3.2.0.zip",
            "doc": "./xdsdk_docs/Android/V3.2.0/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        }, {
            "time": "2017-09-04",
            "size": "5.3M",
            "version": "3.1.5",
            "demo": "./xdsdk_docs/Android/V3.1.5/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.1.5/XDSDK-Android-3.1.5.zip",
            "doc": "./xdsdk_docs/Android/V3.1.5/xd_doc_android.html",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        }, {
            "time": "2017-08-29",
            "size": "5.3M",
            "version": "3.1.4",
            "demo": "./xdsdk_docs/Android/V3.1.4/Demo.zip",
            "sdk": "./xdsdk_docs/Android/V3.1.4/xd_doc_android.html",
            "doc": "./xdsdk_docs/Android/V3.1.4/XDSDK-Android-3.1.4.zip",
            "changeLog": "./xdsdk_docs/Android/CHANGELOG.html"
        }, ],

        "Unity3d": [
            {
                "time": "2018-1-18",
                "size": "30.4M",
                "version": "1.2.8",
                "demo": "https://res.xdcdn.net/xdsdk/Unity/1.2.8/1.2.8.unitypackage",
                "sdk": "https://res.xdcdn.net/xdsdk/Unity/1.2.8/1.2.8.unitypackage",
                "doc": "./xdsdk_docs/Unity/V1.2.8/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-12-27",
                "size": "30.4M",
                "version": "1.2.7",
                "demo": "https://res.xdcdn.net/xdsdk/Unity/1.2.7/v127.zip",
                "sdk": "https://res.xdcdn.net/xdsdk/Unity/1.2.7/v127.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.7/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-12-26",
                "size": "30.4M",
                "version": "1.2.6",
                "demo": "https://res.xdcdn.net/xdsdk/Unity/1.2.6/UnitySDK_v126.zip",
                "sdk": "https://res.xdcdn.net/xdsdk/Unity/1.2.6/UnitySDK_v126.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.6/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-12-24",
                "size": "29.9M",
                "version": "1.2.5",
                "demo": "https://res.xdcdn.net/xdsdk/Unity/1.2.5/UnitySDK_v125.zip",
                "sdk": "https://res.xdcdn.net/xdsdk/Unity/1.2.5/UnitySDK_v125.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.5/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-12-17",
                "size": "29.9M",
                "version": "1.2.3",
                "demo": "./xdsdk_docs/Unity/V1.2.3/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.2.3/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.3/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-11-30",
                "size": "29.9M",
                "version": "1.2.2",
                "demo": "./xdsdk_docs/Unity/V1.2.2/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.2.2/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.2/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-08-06",
                "size": "20.2M",
                "version": "1.2.1",
                "demo": "./xdsdk_docs/Unity/V1.2.1/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.2.1/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.1/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-08-01",
                "size": "14.9M",
                "version": "1.2.0",
                "demo": "./xdsdk_docs/Unity/V1.2.0/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.2.0/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.2.0/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-07-30",
                "size": "14.9M",
                "version": "1.1.9",
                "demo": "./xdsdk_docs/Unity/V1.1.9/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.9/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.9/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-07-24",
                "size": "14.9M",
                "version": "1.1.8",
                "demo": "./xdsdk_docs/Unity/V1.1.8/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.8/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.8/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-07-20",
                "size": "14.9M",
                "version": "1.1.7",
                "demo": "./xdsdk_docs/Unity/V1.1.7/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.7/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.7/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-07-17",
                "size": "14.5M",
                "version": "1.1.6",
                "demo": "./xdsdk_docs/Unity/V1.1.6/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.6/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.6/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-07-13",
                "size": "14.2M",
                "version": "1.1.5",
                "demo": "./xdsdk_docs/Unity/V1.1.5/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.5/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.5/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-07-05",
                "size": "14.2M",
                "version": "1.1.4",
                "demo": "./xdsdk_docs/Unity/V1.1.4/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.4/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.4/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-06-20",
                "size": "16.6M",
                "version": "1.1.3",
                "demo": "./xdsdk_docs/Unity/V1.1.3/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.3/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.3/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
                "time": "2018-05-24",
                "size": "13.4M",
                "version": "1.1.2",
                "demo": "./xdsdk_docs/Unity/V1.1.2/UnityDemo.zip",
                "sdk": "./xdsdk_docs/Unity/V1.1.2/UnitySDK.zip",
                "doc": "./xdsdk_docs/Unity/V1.1.2/XDSDK-Unity3d.html",
                "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
            },
            {
            "time": "2018-03-09",
            "size": "10.9M",
            "version": "1.1.1",
            "demo": "./xdsdk_docs/Unity/V1.1.1/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.1.1/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.1.1/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2018-02-23",
            "size": "10.9M",
            "version": "1.1.0",
            "demo": "./xdsdk_docs/Unity/V1.1.0/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.1.0/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.1.0/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2018-02-06",
            "size": "10.9M",
            "version": "1.0.18",
            "demo": "./xdsdk_docs/Unity/V1.0.18/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.18/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.18/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2018-01-30",
            "size": "10.9M",
            "version": "1.0.17",
            "demo": "./xdsdk_docs/Unity/V1.0.17/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.17/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.17/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2018-01-29",
            "size": "10.9M",
            "version": "1.0.16",
            "demo": "./xdsdk_docs/Unity/V1.0.16/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.16/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.16/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2018-01-29",
            "size": "10.9M",
            "version": "1.0.15",
            "demo": "./xdsdk_docs/Unity/V1.0.15/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.15/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.15/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2018-01-08",
            "size": "10.9M",
            "version": "1.0.14",
            "demo": "./xdsdk_docs/Unity/V1.0.14/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.14/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.14/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2017-12-27",
            "size": "10.9M",
            "version": "1.0.13",
            "demo": "./xdsdk_docs/Unity/V1.0.13/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.13/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.13/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2017-12-19",
            "size": "10.9M",
            "version": "1.0.12",
            "demo": "./xdsdk_docs/Unity/V1.0.12/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.12/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.12/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2017-12-14",
            "size": "10.9M",
            "version": "1.0.11",
            "demo": "./xdsdk_docs/Unity/V1.0.11/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.11/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.11/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2017-12-13",
            "size": "10.9M",
            "version": "1.0.10",
            "demo": "./xdsdk_docs/Unity/V1.0.10/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.10/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.10/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2017-11-27",
            "size": "10.9M",
            "version": "1.0.9",
            "demo": "./xdsdk_docs/Unity/V1.0.9/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.9/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.9/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        },{
            "time": "2017-10-20",
            "size": "10.9M",
            "version": "1.0.8",
            "demo": "./xdsdk_docs/Unity/V1.0.8/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.8/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.8/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        }, {
            "time": "2017-09-19",
            "size": "10.9M",
            "version": "1.0.7",
            "demo": "./xdsdk_docs/Unity/V1.0.7/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.7/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.7/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"

        }, {
            "time": "2017-09-14",
            "size": "10.9M",
            "version": "1.0.6",
            "demo": "./xdsdk_docs/Unity/V1.0.6/UnityDemo.zip",
            "sdk": "./xdsdk_docs/Unity/V1.0.6/UnitySDK.zip",
            "doc": "./xdsdk_docs/Unity/V1.0.6/XDSDK-Unity3d.html",
            "changeLog": "./xdsdk_docs/Unity/CHANGELOG.html"
        }, ],
    };

    for (var item in sdkList) {
        var str = "";
        for (var i in sdkList[item]) {
            str += "<tr>" +
                "<td class=\"fixtime\">" + sdkList[item][i].time + "</td>" +
                "<td>" + sdkList[item][i].size + "</td>" +
                "<td>" + sdkList[item][i].version + "</td>" +
                "<td><a href=\"" + sdkList[item][i].demo + "\"target=\"_blank\">Demo</a></td>" +
                "<td><a class=\"text-sdk\" href=\"" + sdkList[item][i].sdk + "\"target=\"_blank\">" + item + "_SDK</a></td>" +
                "<td><a href=\"" + sdkList[item][i].doc + "\"target=\"_blank\">查看文档</a></td>" +
                "<td><a href=\"" + sdkList[item][i].changeLog + "\"target=\"_blank\">changeLog</a></td>" +
                "</tr>"
        }
        $("." + item + "-wrapper tbody").append(str);
    }
    $(".pill").on("click", function() {
        if ($(this).hasClass('active')) {
            return false;
        }
        $(".pill").removeClass('active');
        $(".table-wrapper").removeClass('active')
        $(this).addClass('active');
        $($(this).data("wrap")).addClass('active');
    })
})(jQuery);
