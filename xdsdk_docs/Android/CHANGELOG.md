Change Log
==========
## 4.0.3

- 修复支付宝支付跳转到心动登录页而不是扫码页问题
- 优化实名认证提示

文件变更：

```
modified:   libs/SDKLib.jar

```

## 4.0.2

- 实名认证页面支持通过返回键返回上一步
- 优化用户中心页面显示
- 修改实名认证页面用户名称和手机号输入效果

文件变更：

```
modified:   libs/SDKLib.jar
modified:   res/*
modified:   libs/taptap.jar

```
## 4.0.1

- 根据最新政策要求修改登录和实名流程
- 删除单独调用绑定手机号接口
- 添加多渠道包支持（依赖广告SDK）
- 修复旧版本弱网络闪退问题

注意：

1）如果项目中单接了旧版tapdb(libTyrantdbGameTracker.jar),会与XDSDK中新版tapdb(libTapDB.jar)有文件冲突，删除libs中的libTapDB.jar即可;

2)如果项目使用的集成XDSDK中的tapdb(libTapDB.jar),若项目中旧版
tapdb(libTyrantdbGameTracker.jar)引起冲突，则删除libTyrantdbGameTracker.jar;

文件变更：

```
modified:   libs/SDKLib.jar
new file:   libs/localbroadcast.jar
modified:   res/*

```
**注意：**

1. 为保证游戏时间统计正确，请正确接入 XDSDK.onStop 和 XDSDK.onResume 方法
2. 如果接入 SDK 的 jar 包后，提示 LocalBroadcastManager 冲突，可以删除 libs 中的 localbroadcast.jar 

## 3.2.18

- 修改心动logo图片，调整对应显示布局
- 支付宝jar包升级到最新版

文件变更：

```
modified:   libs/SDKLib.jar
modified:   libs/alipaySdk-15.6.5.jar
modified:   res/layout/xdsdk_page_register.xml
modified:   res/layout-land/login.xml
modified:   res/layout-land/xdsdk_login.xml
modified:   res/layout-port/login/xml
modified:   res/layout-port/usercenter.xml
modified:   res/layout-port/xdsdk_login.xml
modified:   res/drawable-hdpi/xd_logo_landscape.png
modified:   res/drawable-hdpi/xd_logo_portrait.png
modified:   res/drawable-hdpi/xdsdk_logo_land.png

```

## 3.2.17

- 添加客服页面标题字体长度限制
- 支付宝接口升级
- 添加网页获取SDK版本支持

文件变更：

```
modified:   libs/SDKLib.jar
modified:   libs/xdlive.jar

```

## 3.2.16

- 修改弹框页面字体不再随系统字体变更进行变化
- 修改注册页面中隐私协议对应的链接

文件变更：

```
modified:   libs/SDKLib.jar

```

## 3.2.15

- 登录流程添加手机号强制绑定（后台配置）
- 添加了直接打开绑定手机界面接口：openMobileVerifyView
- XDLive添加了自定义url接口：openXDLive(Context context, String appId, String url)
- XDLive添加对优酷视频源全屏的支持

文件变更：

```
modified:   libs/SDKLib.jar
modified:   libs/xdlive.jar
new file:   res/layout/dialog_phone_number_verify.xml
modified:   res/values/strings.xml
```

## 3.2.14

- 更新TapTap TapDB XDLive

## 3.2.13

- 更新TapTap TapDB XDLive
- 增加接口 openUserBindView
- 增加回调 onGuestBindFailed 请注意查看文档

## 3.2.11

- 隐藏微信不再影响微信支付
- 增强稳定性
- 修改微信分享策略

文件变更：

```
modified:   libs/SDKLib.jar
```

## 3.2.9
- 更新TapTapSDK

文件变更：

```
modified:   libs/SDKLib.jar
modified:   libs/taptap.jar
modified:   res/values/values.xml
modified:   res/drawable-hdpi/taptap_close_pressed.xml
modified:   res/drawable-hdpi/taptap_close_normal.png
new file:   res/drawable-hdpi/taptap_action_sheet.png
new file:   res/layout-land/fragment_forum.xml
new file:   res/layout-port/fragment_forum.xml
deleted :   res/layout/fragment_forum.xml
```


## 3.2.8

- 更新QQSDK
- 增加自定义登录入口功能

- 文件变更：

```
new file:	  libs/open_sdk_r6008_lite.jar
new file:	  res/drawable-hdpi/taptap_back.png
new file:	  res/drawable-hdpi/xdsdk_login_*.png
new file:	  res/drawable-xdpi/xdsdk_login_*.png
new file:	  res/drawable/xdsdk_login_*.png
new file:	  res/layout-land/xdsdk_bind_without_xd.xml
new file:	  res/layout-land/xdsdk_login.xml.xml
new file:	  res/layout-port/xdsdk_bind_without_xd.xml
new file:	  res/layout-port/xdsdk_login.xml.xml
modified:   libs/SDKLib.jar
modified:   libs/taptap.jar
modified:   res/taptap.jar
deleted:    libs/open_sdk_r5793_lite.jar
```

## 3.2.7

- 修改实名认证策略

- 文件变更：

```
modified:   libs/SDKLib.jar
```


## 3.2.6

- 修复8.0设备TapTap闪退
- 修复切换后台导致的登录异常

Breaking changes：

- 新增并默认使用了TapTap登录，使用心动登录的游戏需要调用XDSDK.hideTapTap()切换
- 集成了TapDB，并将初始化方法修改为
  initSDK(Activity activity, String appid, int aOrientation, String channel, String version, boolean enableTapdb) 
  如果游戏已经自行接入TapDB，将enableTapdb置为false，channel和version传任意值
- 为避免TapTap登录在4.4以下的设备出现闪退，请使用gradle构建工程
- TapTap SDK依赖新版的v4支持库，使用时请移除工程内原有的v4支持库
  参考：https://developer.android.com/topic/libraries/support-library/features.html

- 文件变更：

```
new file:   libs/libTyrantdbGameTracker.jar
new file:   libs/taptap.jar
new file:   libs/android-support-compat.jar
new file:   libs/android-support-fragment.jar
modified:   libs/SDKLib.jar
modified:   res/*
```


## 3.2.3

- 集成TapDB
- 上传设备信息

## 3.2.2

- 增加实名认证接口
- 回调接口中增加实名认证

- 文件变更： 

```
modified:   libs/SDKLib.jar

```
- 接口变更：

```
新增 public static void openRealName()
修改 public interface XDCallback()
```

## 3.2.1

- 修复游客充值回调
- 修改部分游戏游客充值无法弹出实名

- 文件变更： 

```
modified:   libs/SDKLib.jar

```


## 3.2.0

- 增加实名认证
- 修改部分文字提示

文件变更：

```
modified:   libs/SDKLib.jar
modified:   res/layout/xdsdk__page_real_name_content.xml
modified:   res/layout/xdsdk__page_register_content.xml
modified:   res/layout/xdsdk__page_register.xml
modified:   res/layout-land/pay.xml
modified:   res/layout-land/login.xml
modified:   res/layout-land/start_youke.xml
modified:   res/layout-land/xdsdk__dialog.xml
modified:   res/layout-land/xdsdk__page_register.xml
modified:   res/layout-port/pay.xml
modified:   res/layout-port/login.xml
modified:   res/layout-port/start_youke.xml
modified:   res/layout-port/xdsdk__dialog.xml
```

### 3.1.5

- 修复qqappid未配置时的登录方式判断

文件变更：

```
modified:   libs/SDKLib.jar
```

### 3.1.4

- 修复二次验证的bug

文件变更：

```
modified:   libs/SDKLib.jar

```

### 3.1.3

- 增加微信分享功能
- 删除部分权限
- 修复兼容性问题（系统推键盘将SDK界面裁切问题）

文件变更：

```
modified:   libs/SDKLib.jar
modified:   AndroidManifest.xml
```

### 3.1.2

- 修改载入界面、登录界面文字
- 防止QQ、微信异常回调
- 禁止部分载入动画点击空白处取消
- 不再依赖外部的onActivityResult
- 优化断网处理
- 修改支付、登录动画，增加超时处理
- 更新大量第三方SDK
- 删除残留的银联支付
- 修改AndroidManifest.xml

文件变更：

```
new file:   libs/open_sdk_r5793_lite.jar	
new file:   libs/alipaySdk-20170725.jar
new file:   libs/wechat-sdk-android-with-mta-1.3.5.jar
new file:   libs/pingpp-2.1.11.jar
new file:   libs/arm64-v8a/libpingpp.so
new file:   libs/armeabi-v7a/libpingpp.so
new file:   libs/armeabi/libpingpp.so
new file:   libs/mips/libpingpp.so
new file:   libs/x86/libpingpp.so
new file:   libs/x86_64/libpingpp.so
modified:   libs/SDKLib.jar
modified:   AndroidManifest.xml
modified:   res/layout-land/login.xml
modified:   res/layout-land/start_youke.xml
modified:   res/layout-port/login.xml
modified:   res/layout-port/start_youke.xml
deleted:    libs/UPPayAssistEx.jar
deleted:    libs/UPPayPluginExPro.jar
deleted:    libs/arm64-v8a/libentryexpro.so
deleted:    libs/arm64-v8a/libuptsmaddon.so
deleted:    libs/armeabi-v7a/libentryexpro.so
deleted:    libs/armeabi-v7a/libuptsmaddon.so
deleted:    libs/armeabi/libentryexpro.so
deleted:    libs/armeabi/libuptsmaddon.so
deleted:    libs/libammsdk.jar
deleted:    libs/libpingpp-2.1.0.jar
deleted:    libs/mips/libentryexpro.so
deleted:    libs/x86/libentryexpro.so
deleted:    libs/x86/libuptsmaddon.so
deleted:    libs/x86_64/libentryexpro.so
deleted:    libs/x86_64/libuptsmaddon.so
deleted:    libs/alipaySdk-20160427.jar
deleted:    libs/libammsdk.jar
deleted:    libs/open_sdk_r5509_lite.jar
```

### 3.1.1

- 增加退出功能
- 增加登录方式隐藏功能
- 点击登录页面左上角5次，出版本号，再点5次，发送自动检测数据
- 修改SDK回调方式
- 修改所有方法为静态
- 增加token有效性验证
- 修改QQ及微信WEB登录逻辑
- 修改工作线程
- 修正内存泄露
- 修正游客绑定中途退出导致的异常
- 使用新的支付方式选择逻辑
- 修改VeryCD的登录界面
- 删除部分接口
- 删除支付时使用的Product_Count参数
- 取消对包ID的验证
- 接口修改请参考 https://github.com/xindong/xd-sdk-docs/tree/master/Android/v3.1.1

文件变更：

```
new:        res/drawable/xd_start_verycd_click.xml
new:        res/drawable-hdpi/xd_start_verycd.png
new:        res/drawable-hdpi/xd_start_verycd_pressed.png
modified:   libs/SDKLib.jar
modified:   AndroidManifest.xml
modified:   res/layout-land/login.xml
modified:   res/layout-land/start_youke.xml
modified:   res/layout-port/login.xml
modified:   res/layout-port/start_youke.xml
modified:   res/values/dimens.xml
```

### 1.4.0

- 增加实名认证功能

- 修复登录界面底下按钮难以点到


### 1.3.9

- 修复游客账号升级在注册页面关闭窗口无登录成功回调


### 1.3.8

- 修复模拟器版本微信、QQ 小图标登录扫码页面

- 修复模拟器版部分机型 qq 扫码登录没反应


### 1.3.7

- 默认开启游客登录

- 修复模拟器支付


### 1.3.6


- 修复微信授权登录时没有 loading 圈


### 1.3.5


- 修复部分机型微信扫码登录页面二维码不能完整显示


### 1.3.4

- 所有 webview 增加 cookie 字段 [did]

- 绑定手机弹窗待用户确认后再回调登录成功
