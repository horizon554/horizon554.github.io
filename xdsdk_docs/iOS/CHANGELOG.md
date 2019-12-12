#Change Log

心动SDK 的 CHANGELOG 记录每次版本更新日志  面向开发
## 4.0.1 - 2019-12-10
- 添加防沉迷机制
- 更新实名认证流程，实名与手机号绑定界面合并。
- SDK内部集成新版TapDB\_iOS.framework。如原项目中有单接新版TapDB(2.1.0以上),可删除导入的TapDB\_iOS.framework避免造成冲突;

文件变更：

1.resources文件夹

2.XdComPlatform.framework

## 3.2.31 - 2019-10-17
- 更新心动LOGO.

文件变更：

1.resources文件夹

2.XdComPlatform.framework


## 3.2.30 - 2019-09-27
- 适配iOS13
- 支付流程优化，减少掉单。需要在应用启动时（didFinishLaunch）初始化支付[XDCore setUpXDStore]。
- 添加新回调，有未完成订单时回调。-(void)restoredPayment:(nonnull NSArray*)paymentInfos。
- 添加新接口，接收到未完成订单回调时可调用该接口恢复订单。+ (BOOL)restoreProduct:(nonnull NSDictionary *)prodectInfo
- 新接口及回调具体使用见文档5.8节
- 客服接口userFeedback优化，直接跳转到当前游戏客服页面。


## 3.2.29 - 2019-08-28
- 登录流程添加手机号强制绑定(后台配置)
- 登录后可单独调起绑定手机界面，接口：openMobileVerifyView（）
- 需要更新resource文件夹
- XDLive添加自定义uri接口

## 3.2.28 - 2019-05-30
- 更新XDLive

## 3.2.27 - 2019-03-11
- 修复了跳转微信登录需要输入账号密码时可能登录失败的bug。

## 3.2.26 - 2019-01-18
- 修复了游客升级时进行实名认证可能没有回调的bug。
- 更新 TapTapSDK。
- 添加XDLiveSDK。

## 3.2.25 - 2018-12-20
- 添加了直接打开游客绑定接口：openUserBindView。
- 添加了游客绑定失败回调：onGuestBindFail。

## 3.2.24 - 2018-11-29
- 更新 TapTapSDK。

## 3.2.23 - 2018-11-27
- 修复低版本API(UIAlertView)在iOS12可能造成问题：退出登录后无法再弹出登录界面。

## 3.2.22 - 2018-09-25
- 修复3.2.16之前旧版本SDK使用taptap登录后升级新版本SDK后无法弹出登录页问题

## 3.2.21 - 2018-08-03
- 移除SDK初始化方法 [XDCore init:@"xx" orientation:0];<br>SDK 初始化请统一使用 [XDCore init:@"xx" orientation:0 channel:@"" version:@"" enableTapdb:YES];
- 弃用微信分享相关模块，后续版本将彻底移除，如果有第三方分享需求请自行对接第三方平台分享 SDK；
- 优化内部逻辑，SDK 初始化时如果未设置或无法获取到 TapDB AppId，SDK 将自动关闭 TapDB 统计服务。

## 3.2.20 - 2018-07-24
- 更新taptapSDK
- iPad未安装微信显示微信登录入口，点击跳转扫码登录
- 素材资源替换

## 3.2.19 - 2018-07-17
- 更新微信SDK版本1.8.2.需在工程配置中的‘Other Linker Flags’中加入‘-ObjC’
- 优化内部逻辑（未初始化完成不允许弹出登录界面）
- 修复上一版SDK可能造成的taptap登录崩溃问题。
- 默认登录入口为：微信、taptap、游客、QQ（注：默认入口隐藏taptap则会添加心动登录入口）。可使用自定义接口覆盖默认登录入口。

## 3.2.18 - 2018-07-04
- 设备没有安装微信则隐藏微信登录入口

## 3.2.17 - 2018-06-15 
- 更新TencentOpenAPI.framework,版本iOS-3.3.3
- 素材替换与新增，需要添加进项目。
- XDCore.h添加新接口，可以自定义登录按钮及顺序，具体使用请看接口文档。
- + (void)setLoginEntries:(NSArray *)entries 


## 3.2.16 - 2018-05-11 b919917caeaf65b4c7cb3cec546bcc4998a72e34
- 修复QQ Web无法登录问题
- 移除XDStore.framework,只需引入XdComPlatform.framework
- TapTapSDK更新，需要添加新依赖库webkit.framework


## 3.2.15 - 2018-05-03

- IAP订单验证添加签名校验
- 验证接口使用新的V2接口
- SDK检查参数结果添加提示


## 3.2.14 - 2018-04-20

- 优化支付流程
- 优化支付时对设备的验证

## 3.2.13 - 2018-03-09

- 更新SDK实名制流程，新增服务端配置参数，可对登陆、注册、支付实名制流程进行控制

## 3.2.12 - 2018-02-23

###Changed

-	支付API[XDCore pay:]更名为[XDCore requestProduct:],具体参数不变。

###Added
- [XDCore hideTapTap];3.2.12版本SDK默认登录方式为TapTap登录，老游戏需要调用该方法切换至心动账号登陆。
- [XDCore init:@"xx" orientation:0 channel:@"" version:@"" enableTapdb:YES];
	新增初始化方法，用于SDK接入TapDB统计系统使用。若游戏希望手动接入TapDB，请将enableTapdb设为FALSE。
- [XDCore userFeedback];客服中心功能，游戏可在平台进行客服页面配置，直接打开客服页面。

## 3.2.11 - 2018-02-06

- 删除代码以及注释中alipay相关字符

## 3.2.10 - 2018-01-30

- 修复游客升级实名制流程问题，新增客服页面配置功能

## 3.2.9 - 2018-01-29

- 修复iOS7设备兼容问题

## 3.2.8 - 2018-01-29

- 移除苹果审核私有API WebActionDisablingCALayerDelegate 方法

## 3.2.7 - 2018-01-20

- 修复心动账号手机二次验证问题

## 3.2.6 - 2018-01-08

- 修复心动账号登录页面密码输入框无法输入符号问题

## 3.2.5 - 2017-12-27

- 新增主动调用实名认证接口：openRealName
- 新增实名认证成功与失败的回调函数：onRealNameSucceed  onRealNameFiled
- 兼容iOS7以及低版Xcode编译，详情见SDK附件说明文档

## 3.2.4 - 2017-12-19

- 修复第三方输入法中文输入问题
- 修复中文用户名登陆失败问题
- 优化游客进行web第三发登录的绑定流程

## 3.2.3 - 2017-12-14

- 统一游客登录流程未完成状态下，退出游客的回调函数

## 3.2.2 - 2017-12-12

- 修复游客支付实名认证，支付取消回调异常问题

## 3.2.1 - 2017-11-27

- 修复游客退出bug
- 修复包验证参数缺失问题

## 3.2.0 - 2017-10-18

- 新增强制实名验证功能
- 针对iOS11优化了部分UI（务必替换resource文件夹下所有文件）
- 低版本Xcode在编译时报“Compilling IB documents for earlier than iOS7”,请修改storyboard-> Interface Builder Document -> Build for -> iOS8.0 and Later
- 编译时报“FileProvider  framework not found”错误，建议升级Xcode

## 3.1.7 - 2017-09-27

- 修改包检测参数名称，规避AppStore审核第三方支付问题

## 3.1.6 - 2017-09-19

- 修复游客登录回调流程问题

## 3.1.5 - 2017-09-14

- 修复1.x版本兼容问题

## 3.1.4 - 2017-09-12

- 修复游客账号丢失问题

## 3.1.3 - 2017-08-29

- 修复登录二次验证问题
- 修复登出用户后注册显示用户错误问题

## 3.1.2 - 2017-08-15

- 修复短信注册bug
- 新增微信分享功能

## 3.1.1 - 2017-07-27

- 修改3.0版本VeryCD登录页面UI排版，新增了资源文件 

```
resource／start/xd_start_verycd_pressed.png 
resource／start/xd_start_verycd.png
```
- 修改XDPay.framework,重命名为XDStore.framework。
- XDStore.framework中支付方法:pay更名为prepare，外部调用支付方法不变。
- 修改了登录与注册异常情况的弹窗提示。
- 支持bitcode。

## 3.0.1 - 2017-07-18

- 修复了product_count、ext问题
- 替换了微信和QQ的SDK
- 微信SDK需要修改build Settings =》 other linker flags =》 _all_load

## 3.0.0 - 2017-07-06

### 版本更新
- 优化了API接口，所有接口替换为静态方法
- 接口更新
	* 配置类方法
		* `+ (nonnull NSString*)getSDKVersion;（获取SDK版本号）`
		* `+ (void)setCallBack:(nonnull id<XDCallback>)delegate;（设置回调）`
		* `+ (void)hideGuest;（隐藏游客登录）`
		* `+ (void)hideWX;（隐藏微信登录）`
		* `+ (void)hideQQ;（隐藏QQ登录）`
		* `+ (void)showVC;（显示VeryCD登录）`
		* `+ (void)setQQWeb;（强制QQ为Web登录授权方式）`
		* `+ (void)setWXWeb;（强制微信为Web扫码授权方式）`
		* `+ (BOOL)HandleXDOpenURL:(nonnull NSURL*)url;（在AppDelegate中响应第三方App授权回调）`
	* 功能类方法
		* `+ (void)init:(nonnull NSString*)appid orientation:(int)orientation;（初始化SDK）`
		* `+ (void)login;（登录）`
		* `+ (nullable NSString*)getAccessToken;（获取用户access_token）`
		* `+ (BOOL)isLoggedIn;（检测用户是否登录）`
		* `+ (BOOL)openUserCenter;（打开用户中心）`
		* `+ (BOOL)pay:(nonnull NSDictionary*)prodectInfo;（进行支付）`
		* `+ (void)logout;（登录）`
- 移除原有的通知回调方式，新增XDCallback协议，在集成SDK时需要在初始化SDK前设置并实现该协议
- 拆分支付功能至XDPay组件，游戏调用方式不变
- 修复了身份证绑定页面UI缺陷
- 新增登录页面左上角点击显示SDK版本号功能

- 回调函数变更

```
//初始化成功
- (void)onInitSucceed;

//初始化失败
- (void)onInitFailed:(nullable NSString*)error_msg;

//登录成功
- (void)onLoginSucceed:(nonnull NSString*)access_token;

//登录失败
- (void)onLoginFailed:(nullable NSString*)error_msg;

//登录取消
- (void)onLoginCanceled;

//游客账号升级成功
- (void)onGuestBindSucceed:(nonnull NSString*)token;

//登出成功
- (void)onLogoutSucceed;

//支付完成
- (void)onPayCompleted;

//支付失败
- (void)onPayFailed:(nullable NSString*)error_msg;

//支付取消
- (void)onPayCanceled;

```





## [1.3.13](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-06-15

###Fixed

- 修复了在SDK初始化完成之后，删除微信App，SDK微信登录异常问题。
- 新增身份证绑定功能
- 资源文件有变动，请务必替换resource文件

## [1.3.12](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-25

###Fixed

- 移除来了无用的方法：showToolBar、hideToolBar、pause
- 修改了注释信息
- 修改了资源文件，请务必替换

## [1.3.11](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-24

###Fixed

- 修改Pad版本UI显示问题
- 修改短信验证码倒计时逻辑
- 恢复了登录回调中token参数

## [1.3.10](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-23

###Fixed

- 移除了支付宝支付方式
- 请移除AlipaySDK.framework

## [1.3.9](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-22

###Fixed

- 修复游客登陆进行账号升级，中断升级流程后出现的逻辑错误

###Added

- 修改了QQ登录的登录方式，默认为Web登录方式。开发者如需指定登录方式，可修改参数，TRUE为QQ平台登录，FALSE为QQ Web登录。
  
  ```
  /* 默认为Web登录方式 */
  - (void)setQQLoginStrategy:(BOOL)enableThirdPlatform;

  ```

## [1.3.8](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-18

###Fixed

- 修复隐藏游客按钮后心动登录按钮不居中问题
- 修复了用户中心名称不显示的问题

###Changed

- 注册流程暂时去除了实名制的功能
- `XDCore.h` 中以下接口新增参数，详细信息参考 [对接文档](./docs/心动SDK-iOS对接文档.docx)
  
  ```
  /* 游客登录新增参数控制是否隐藏，默认显示 */
  - (void)hideGuest:(BOOL)isHidden;

  /* veryCD登录新增参数控制是否隐藏，默认隐藏 */
  - (void)hideVC:(BOOL)isHidden;
  ```

## [1.3.7](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-12

###Fixed

- 修复心动用户登录无法触发登录成功回调的问题


## [1.3.6](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-11

###Fixed

- 修复游客登录无法触发登录成功回调的问题


## [1.3.5](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-08

###Fixed

- 修复启示界面微信登录扫码缺失 `client_id` 的问题


## [1.3.4](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-05

###Added

- 所有 webview 增加 cookie 字段 [did]

###Changed

- 修改绑定手机弹框为用户确认

###Fixed

- 记录仅心动登录的情况下才提示绑定手机弹窗


## [1.3.3](https://hub-pt.xindong.com/platform/JS-IOS-SDK) - 2017-05-04

###Added

- 增加登录成功后提示绑定手机的流程
- 增加 心动SDK 获取版本的接口
- 增加绑定手机的新注册界面
- 增加手机二次验证的登录界面

###Changed

- 去除无用的旧项目依赖和示例工程
- 更改原先 `master` 分支为 `feature/legacy`
- 设置主分支 `app_store` 为 `master`
- 增加开发版本分支 `develop`
- 使用 git-flow 标准开发流程

###Fixed

- 修复部分界面的横屏差异显示问题
