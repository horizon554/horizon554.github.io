Change Log
==========

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
