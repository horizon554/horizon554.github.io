#Change Log

心动SDK_Unity 的 CHANGELOG 记录每次版本更新日志  面向开发

###Unity 2.1.6 - 2020-4-29（iOS-4.1.3&Android-4.1.3)

文件变更：

1.XDSDK.cs


**iOS**

- 支付流程优化


文件变更：

1.XdComPlatform.framework

###Unity 2.1.5 - 2020-4-15（iOS-4.1.2&Android-4.1.3)

文件变更：

1.XDSDK.cs


**Android**

- 添加支付宝沙盒测试支持


文件变更：

1.SDKLib.jar

###Unity 2.1.4 - 2020-4-13（iOS-4.1.2&Android-4.1.2)

文件变更：

1.XDSDK.cs


**iOS**

- 修复iOS9以下非游客登录打开用户中心可能崩溃bug
- 其他优化


文件变更：

1.XdComPlatform.framework

###Unity 2.1.3 - 2020-3-31（iOS-4.1.1&Android-4.1.2)

文件变更：

1.XDSDK.cs


**iOS**

- 修复游客升级可能缺少最后一个登录方式的Bug


文件变更：

1.XdComPlatform.framework


###Unity 2.1.2 - 2020-3-17（iOS-4.1.0&Android-4.1.2)
- 移除废弃接口openMobileVerifyView


文件变更：

1.XDSDK.cs

2.XDSDKImp.cs

**安卓**

- 修复XD登录页点击苹果登录无效bug
- 修复XD注册完成后跳转错误问题
- 修复微信扫码登录时二维码未居中问题

文件变更：

1.SDKLib.jar

2.res目录


###Unity 2.1.1 - 2020-3-11（iOS-4.1.0&Android-4.1.1)
文件变更：

1.XDSDK.cs

**安卓**

- 登录界面UI调整
- 登录入口最多显示5个

文件变更：

1.SDKLib.jar

2.res目录

###Unity 2.1.0 - 2020-3-10（iOS-4.1.0&Android-4.1.0)

文件变更：

1.XDSDK.cs


**1.iOS**

- SDK新增苹果登录，需要配置工程和更换证书。请仔细阅读iOS部分文档，搜索关键字版本号：2.1.0
- 去除UIWebview.
- 更新微信SDK1.8.6.2;更新QQ SDK 3.3.7
- **新增接口handleOpenUniversalLink**，需要在AppDelegate/UnityAppController中调用。请阅读文档
- info.plist中LSApplicationQueriesSchemes添加一项『weixinULAPI』
- **在xcode工程中需要添加两项capability**：Associated Domains \ Sign in with apple.
- 需在Link binary With Libraries中添加AuthenticationServices.framework


文件变更：

1.XdComPlatform.framework

2.TencentOpenAPI.framework

3.libWeChatSDK.a

4.resource文件夹


**2.安卓**

- 更新 TapDB 依赖库
- 更新 XDSDK 网络库
- XDSDK 添加苹果登录支持

文件变更：

1.SDKLib.jar

2.libTapDB.jar

3.msa_mdid_1.0.13.aar

4.res目录

移除：

1.miit_mdid_1.0.10.aar


###Unity 2.0.6 - 2020-2-12（iOS-4.0.5&Android-4.0.4)

**1.安卓**

- TapDB代码优化，解决和旧版可能存在的冲突
- TapDB增加OAID收集.默认在libs目录下添加了miit\_mdid\_1.0.10.aar,在assets目录下添加了supplierconfig.json。如项目中已有或之前已添加过造成冲突，可删除。
- 广告渠道包工具添加OAID搜集，如需使用请先联系XDSDK相关人员和阅读文档。



文件变更：

1.SDKLib.jar

2.libTapDB.jar (2.1.4)

**文件新增：**

1.miit\_mdid\_1.0.10.aar  （**放⼊项⽬ libs⽬录下(例例如:app/
libs )**）

2.supplierconfig.json	（**确保放⼊项目assets ⽂件夹内，配置文件内容⽆需修改**）




###Unity 2.0.5 - 2019-12-27（iOS-4.0.5&Android-4.0.3)
- 修改直播组件XDLive,增加指定屏幕方向打开直播接口

```
/// 打开论坛
/// @param appid appid
/// @param uri 自定义url
/// @param orientation 指定屏幕方向
public void OpenXDLive(string appid,string uri,int orientation);
```

文件变更：

1.XDLive.cs


**1.iOS**

- 修复SDK内集成TapDB重复统计用户Bug，可能造成新增账号异常数据.
- 修改TapTapSDK,去除可能和其他SDK可能的文件重复。去除UIWebview.
- 修改直播组件XDLive,去除UIWebview.新增屏幕方向配置接口

文件变更：

1.XdComPlatform.framework

2.TapTapSDK.framework

3.XDLive.framework

4.libXDLiveiOSWrapper.a

**移除：**

若游戏单接旧版本TapDB(2.1.0以下)，需要继续保留。

1.libTyrantdbGameTracker.a

2.libTyrantdbGameTracker.h


**2.安卓**

- TapDB增加OAID收集.请阅读附加文档。
- 直播组件XDLive增加屏幕方向接口。

文件变更：

1.xdlive.jar

2.XDLiveForUnity.jar

3.libTapDB.jar（版本2.1.3）（请先确认项目中是否单接，和单接的版本,决定是否更新）


###Unity 2.0.4 - 2019-12-21（iOS-4.0.4&Android-4.0.3)
**1.iOS**

- 修复防沉迷某些情形造成crash的bug。


文件变更：

1.resources文件夹

2.XdComPlatform.framework


###Unity 2.0.3 - 2019-12-16（iOS-4.0.3&Android-4.0.3)
**1.iOS**

- 修复登录界面可能错位问题
- 修复用户中心升级游客升级输入错误账号密码之后，可能无法再调起用户中心问题


文件变更：

1.resources文件夹

2.XdComPlatform.framework

**2.安卓**

- 修复支付时跳转网页可能显示心动登录界面问题
- 优化实名认证界面提示


文件变更：

1.SDKLib.jar


###Unity 2.0.2 - 2019-12-13（iOS-4.0.2&Android-4.0.2)
**1.iOS**

- 修复登录界面可能错位问题
- 修复非主线程调用支付可能crash问题
- 实名认证页面支持通过返回键返回上一步

文件变更：

1.resources文件夹

2.XdComPlatform.framework

**2.安卓**

- 实名认证页面支持通过返回键返回上一步
- 优化用户中心页面显示
- 修改实名认证页面用户名称和手机号输入效果


文件变更：

1.SDKLib.jar

2.taptap.jar

3.res目录

4.AndroidManifest.xml


###Unity 2.0.1 - 2019-12-10（iOS-4.0.1&Android-4.0.1)
1.添加安卓启动（OnResume）暂停(OnStop)接口

文件变更：

1.XDSDK.cs

2.XDSDKImp.cs

###Unity 2.0.0 - 2019-12-10（iOS-4.0.1&Android-4.0.1)
**1.iOS**

- 添加防沉迷机制
- 更新实名认证流程，实名与手机号绑定界面合并。
- SDK内部集成新版TapDB\_iOS.framework。如原项目中有单接新版TapDB(2.1.0以上),可删除导入的TapDB\_iOS.framework避免造成冲突;

文件变更：

1.resources文件夹

2.XdComPlatform.framework


**2.安卓**

- 添加防沉迷机制
- 更新实名认证流程，实名与手机号绑定界面合并。
- 修复旧版启动时可能崩溃的问题
- 删除单独调用绑定手机号接口
- 添加广告渠道包支持（如需要请联系XDSDK支持人员）

注意：

1）如果项目中单接了旧版tapdb(libTyrantdbGameTracker.jar),会与XDSDK中新版tapdb(libTapDB.jar)有文件冲突，删除libs中的libTapDB.jar即可;

2)如果项目使用的集成XDSDK中的tapdb(libTapDB.jar),若项目中旧版
tapdb(libTyrantdbGameTracker.jar)引起冲突，则删除libTyrantdbGameTracker.jar;

3)如果接入 SDK 的 jar 包后，提示 LocalBroadcastManager 冲突，可以删除 libs 中的 localbroadcast.jar

**重要！请确认游戏中的启(onresume)停(onstop)方法调用情况.对防沉迷时长统计有重要影响。**


文件变更：

1.SDKLib.jar

2.SDKLibForUnity.jar

3.增加localbroadcast.jar

4.res目录


**3.unity文件变更：**

1.XDSDK.cs

2.XDSDKListener.cs

3.XDSDKImp.cs

4.libXDSDKiOSWrapper.a



###Unity 1.2.15 - 2019-11-01（iOS-3.2.31&Android-3.2.19)
1.iOS

- 无更新

2.安卓

- 修复sdk内TapDB统计丢失username问题

- 添加广告SDK，具体使用请看文档第4节。

文件变更：

1.SDKLib.jar

2.SDKLibForUnity.jar

3.XDSDK.cs

4.XDSDKImp.cs


###Unity 1.2.14 - 2019-10-17（iOS-3.2.31&Android-3.2.18)
1.iOS

- 更新心动LOGO.

2.安卓

- 更新心动LOGO.

- 更新支付宝SDK

文件变更：

1.resources文件夹

2.XdComPlatform.framework
- 客服接口UserFeedback优化，直接跳转到当前游戏客服页面

3.SDKLib.jar

4.alipaySdk.jar

5.SDKLibForUnity.jar

6.res目录




###Unity 1.2.13 - 2019-9-27（iOS-3.2.30&Android-3.2.17)
1.iOS

- 适配iOS13
- 支付流程优化，具体使用见文档1.9节
- 添加新回调，在有未完成订单时触发
public abstract void RestoredPayment (List<Dictionary<string,string>> resultList)，需要在应用启动后(didfinishLaunch中)调用[XDCore setUpXDStore].
- 添加新接口，接收到未完成订单回调时可以调用，恢复订单
public override void RestoredPayment(Dictionary<string, string> dictionary)
- 客服接口UserFeedback优化，直接跳转到当前游戏客服页面

2.安卓

- 修复修改字体可能造成界面错位问题
- 升级支付宝SDK
- 客服接口UserFeedback优化


###Unity 1.2.12 - 2019-8-29（iOS-3.2.29&Android-3.2.15)
- 登录流程添加手机号强制绑定(后台配置)
- 登录后可单独调起绑定手机界面，接口：openMobileVerifyView（）
- 需要更新resource文件夹


###Unity 1.2.11 - 2019-6-17（iOS-3.2.28&Android-3.2.14)
- 修复XDLiveWrapper缺少的构建

###Unity 1.2.10 - 2019-5-30（iOS-3.2.28&Android-3.2.14)
- 更新TapDB及相关SDK（安卓需删除旧版libTyrantdbGameTracker）
- 更新xdlive

###Unity 1.2.9 - 2019-3-20（iOS-3.2.27&Android-3.2.13)
- 更新iOS SDK
- 增加流量控制

###Unity 1.2.8 - 2018-12-29（iOS-3.2.26&Android-3.2.13)
- 修复实名回调异常

###Unity 1.2.7 - 2018-12-29（iOS-3.2.26&Android-3.2.13)
- 更新 iOS XDSDK

###Unity 1.2.6 - 2018-12-24（iOS-3.2.25&Android-3.2.13)
- 更新 TapTap SDK

###Unity 1.2.5 - 2018-12-24（iOS-3.2.25&Android-3.2.13)
- 增加接口 OpenUserBindView 
- 增加回调 OnGuestBindFailed 请注意查看文档
- 更新 XDLive
- 更新 TapTapSDK
- 更新 TapDBSDK

###Unity 1.2.3 - 2018-12-17（iOS-3.2.24&Android-3.2.11)
- 更新 XDLive

###Unity 1.2.2 - 2018-11-30（iOS-3.2.24&Android-3.2.11)
- 更新 TapTapSDK

###Unity 1.2.1 - 2018-08-06（iOS-3.2.21&Android-3.2.11)
- 微信分享接口已过期
- 增强AndroidSDK稳定性

###Unity 1.2.0 - 2018-08-01（iOS-3.2.20&Android-3.2.10)
- 修复微信分享收不到回调问题

###Unity 1.1.9 - 2018-07-30（iOS-3.2.20&Android-3.2.10)
- 更新Android3.2.10
- 微信分享支持jpg 
- 隐藏微信登录时，微信支付仍然可见

###Unity 1.1.8 - 2018-07-24（iOS-3.2.20&Android-3.2.9)
- 更新微信SDK版本1.8.2.需在工程配置中的‘Other Linker Flags’中加入‘-ObjC’
- 更新taptapSDK
- iPad未安装微信显示微信登录入口，点击跳转扫码登录
- 素材资源替换

###Unity 1.1.7 - 2018-07-20（iOS-3.2.19&Android-3.2.9)
- 更新taptapSDK


###Unity 1.1.6 - 2018-07-17（iOS-3.2.19&Android-3.2.8)
- 优化内部逻辑（未初始化完成不允许弹出登录界面）
- 修复上一版SDK可能造成的taptap登录崩溃问题。
- 默认登录入口为：微信、taptap、游客、QQ（注：默认入口隐藏taptap则会添加心动登录入口）。可使用自定义接口覆盖默认登录入口。

###Unity 1.1.5 - 2018-07-13（iOS-3.2.18&Android-3.2.8)
- 可能与其他第三方库冲突的内部函数名修改
- 重新添加armv7支持

###Unity 1.1.4 - 2018-07-04（iOS-3.2.18&Android-3.2.8)
- 设备未安装微信则隐藏微信登录入口

###Unity 1.1.3 - 2018-06-20（iOS-3.2.17&Android-3.2.8)
- 更新QQSDK
- 增加自定义登录入口功能，请参考使用文档

###Unity 1.1.2 - 2018-05-16（iOS-3.2.16&Android-3.2.7）
- 修复QQ Web无法登录问题
- 删除libRMStore.a和XDStore.framework，只需导入XDComPlatform.framework

###Unity 1.1.1 - 2018-03-09（iOS-3.2.13&Android-3.2.7）
- 修改实名认证策略

###Unity 1.1.0 - 2018-02-06（iOS-3.2.12&Android-3.2.6）
- 更新TapTap版本iOS AndroidSDK
- 修复安卓8.0设备TapTap闪退
- 修复安卓切换后台登录异常
- 删除、变更iOS版本可疑关键字方法名类名
- 详细变更请参考Android iOS CHANGELOG

###Unity 1.0.18 - 2018-02-06（iOS-3.2.11&Android-3.2.2）
- 删除代码以及注释中alipay相关字符串

###Unity 1.0.17 - 2018-01-30（iOS-3.2.10&Android-3.2.2）
- 修复游客升级实名制流程问题
- 新增客服链接配置功能

###Unity 1.0.16 - 2018-01-29（iOS-3.2.9&Android-3.2.2）
- 修复15版本iOS7兼容问题

###Unity 1.0.15 - 2018-01-29（iOS-3.2.8&Android-3.2.2）
- 修复iOS手机二次验证问题，修复苹果审核私有API问题

###Unity 1.0.14 - 2018-01-08（iOS-3.2.6&Android-3.2.2）
- 修复iOS登录页面密码无法输入符号问题

###Unity 1.0.13 - 2017-12-29（iOS-3.2.5&Android-3.2.2）
- 新增用户实名认证接口

###Unity 1.0.12 - 2017-12-19（iOS-3.2.4&Android-3.2.0）
- iOS第三方输入法问题

###Unity 1.0.11 - 2017-12-14（iOS-3.2.3&Android-3.2.0）
- 统一游客登录未完成状态下，退出登录的回调函数

###Unity 1.0.10 - 2017-12-13（iOS-3.2.2&Android-3.2.0）
- 更新 iOS SDK
- 修复游客支付实名认证过程中，回调异常问题

###Unity 1.0.9 - 2017-11-27（iOS-3.2.1&Android-3.2.0）
- 更新 iOS SDK
- 修复包验证参数缺失
- 适配iPhoneX

###Unity 1.0.8 - 2017-10-20（iOS-3.2.0&Android-3.2.0）
- 更新 iOS&Android SDK 新增强制实名制功能

###Unity 1.0.7 - 2017-09-19（iOS-3.1.6&Android-3.1.5）
- 更新 iOS SDK 修复游客登录回调流程问题

###Unity 1.0.6 - 2017-09-14（iOS-3.1.5&Android-3.1.5）
- 更新 iOS SDK 修复1.x版本SDK兼容问题

###Unity 1.0.5 - 2017-09-12（iOS-3.1.4&Android-3.1.5）

- 更新 iOS SDK
- 修复 iOS 游客账号可能丢失的问题

###Unity 1.0.4 - 2017-09-04（iOS-3.1.3&Android-3.1.5）

- 更新 Android SDK

###Unity 1.0.3 - 2017-08-30（iOS-3.1.3&Android-3.1.4）

- 更新 Android&iOS SDK
- 修复 Android&iOS 手机二次验证问题
- 修复 iOS用户注册问题

###Unity 1.0.2 - 2017-08-21（iOS-3.1.2&Android-3.1.3）

- 更新 Android SDK

###Unity 1.0.1 - 2017-08-15（iOS-3.1.2&Android-3.1.3）

- 新增微信分享接口
- 更新 iOS&Android SDK

###Unity 1.0.0 - 2017-08-07（iOS-3.1.1&Android-3.1.2）

- v1.0.0 SDK 发布
