#Change Log

心动SDK_Unity 的 CHANGELOG 记录每次版本更新日志  面向开发

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
