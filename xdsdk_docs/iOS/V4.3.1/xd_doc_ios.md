## <center> 心动SDK（iOS）对接文档 </center>

### 目录
* [1.心动SDK介绍](#1心动sdk介绍)
	* [1.1登录流程](#11登录流程)
	* [1.2支付流程](#12支付流程)
	* [1.3SDK集成流程](#13sdk集成流程)
* [2.申请心动AppID](#2申请心动appid)
* [3.需要遵守的规则](#3需要遵守的规则)
	* [3.1.回调依赖](#31回调依赖)
* [4.接入SDK](#4接入sdk)
	* [4.1获取SDK](#41获取sdk)
	* [4.2添加系统依赖库](#42添加系统依赖库)
	* [4.3设置URL Types](#43设置url-types)
	* [4.4配置info.plist](#44配置infoplist)
	* [4.5配置工程capability](#45配置工程capability)
	* [4.6处理第三方应用跳回事件](#46处理第三方应用跳回事件)
* [5.接口调用](#5接口调用)
	* [5.1配置SDK登录选项](#51配置sdk登录选项)
	* [5.2实现SDK协议](#52实现sdk协议)
	* [5.3初始化SDK](#53初始化sdk)
	* [5.4登录](#54登录)
	* [5.5获取Access Token](#55获取access-token)
	* [5.6获取当前登录状态](#56获取当前登录状态)
	* [5.7打开用户中心](#57打开用户中心)
	* [5.8发起支付](#58发起支付)
	* [5.9登出](#59登出)
	* [5.10游客升级](#510游客升级)
	* [5.11微信分享](#511微信分享)
	* [5.12实名认证](#512实名认证)
	* [5.13用户反馈](#513用户反馈)
	* [5.14TapTap论坛](#515TapTap论坛)

* [6.广告SDK说明](#6广告部分说明)

* [7.服务端对接](#7服务端对接)
	* [6.1获取用户信息](#71获取用户信息)
	* [6.2处理支付回调](#72处理支付回调)

<span id="1心动sdk介绍">

### 1.心动SDK介绍

心动SDK主要为游戏提供登录，支付等功能。登录流程和支付流程都需要客户端和服务端同时参与。

<span id="11登录流程">

#### 1.1.登录流程

<image src="https://static.tapdb.net/web/res/img/upload/2017/06/27/01.png"></image>

<span id="12支付流程">

#### 1.2.支付流程

<image src="https://static.tapdb.net/web/res/img/upload/2017/06/27/02.png"></image>

<span id="13sdk集成流程">

#### 1.3.SDK集成流程

<image src="https://static.tapdb.net/web/res/img/upload/2017/07/07/01.png"></image>

<span id="2申请心动appid">

### 2.申请心动AppID

<p>参阅“心动AppID申请介绍”文档，申请心动AppID，获得心动AppID、心动AppKey、微信AppID、QQ AppID。其中心动AppID主要是客户端对接时使用，AppKey主要是服务端对接支付回调时使用。</p>

<p style="color:red">注意，如果游戏需要使用微信分享功能，必须使用心动提供的微信AppID，否则会导致微信登录失败。
</p>

<span id="3需要遵守的规则">

### 3.需要遵守的规则

<p>对接过程中，为了避免出现一些奇怪的问题，无特殊需求情况下，请尽量遵守下面的规则。
</p>

<span id="31回调依赖">

#### 3.1.回调依赖

<p>游戏调用SDK的功能，SDK通常会以回调形式通知到游戏，除了必须依赖的回调（如登录成功回调），其它回调尽可能不依赖。此场景适用于登录、打开用户中心、支付。</p>

<p>比如游戏登录，通常是游戏提供一个登录按钮，用户点击后调用SDK登录，此时有两种处理方式。A、点击后，游戏隐藏登录按钮或使用loading图标盖住，等收到SDK登录失败回调时，才会再次展现登录按钮或移除loading。B、无论是否收到回调，都保证按钮处理可点状态。</p>

<p>建议游戏使用后者，防止意外情况下，流程无法走通，用户无法继续操作的情况。另外也可以采用后者的优化版，即用户点击后，仅屏蔽按钮1秒钟，这样可以防止用户反复点击导致SDK接口被反复调用。</p>

<p>总之游戏尽可能保证功能一直处于可用状态，而不依赖SDK的状态。</p>

<span id="4接入sdk">

### 4.接入SDK

<span id="41获取sdk">

<p style="color:red">在编译选项‘Other Linker Flags’中加入「-ObjC」和 「-all_load」。</p>

**重要:4.3.1版本加入Swift混编，如编译遇到Swift编译报错，可加入一个Swift空文件解决。libs文件夹中已提供**

#### 4.1.获取SDK

从心动平台处获取SDK，其中主要的文件或目录用途如下。

目录或文件 | 用途
--- |---
XdComPlatform.framework | 心动SDK的主要库文件，需要添加到项目依赖中 
resource | 心动SDK需要或依赖的资源文件，需要保证所有文件都被添加到了Xcode的“Copy Bundle Resources”中(确保勾选了Copy items if needed)
libs | 心动SDK依赖的其它库文件，需要添加到项目依赖中

<span id="42添加系统依赖库">

#### 4.2.添加系统依赖库

```
Security.framework 
CFNetwork.framework
UIKit.framework
QuartzCore.framework
Foundation.framework
CoreGraphics.Framework
CoreTelephony.framework
SystemConfiguration.framework
Webkit.framework
libiconv.tbd
libsqlite3.0.tbd
libc++.tbd
libz.tbd
libicucore.tbd
// 4.1.0
AuthenticationServices.framework
```
<span id="43设置url-types">

#### 4.3.设置URL Types

需要在Xcode中设置多个URL Types，URL Types主要是需要设置URL Schemes，其它选项可任意填写。按照下面表格的内容填写，注意替换其中的各项AppID。

URL Schemes | 用途 |示例 |备注
---|---|---|---|
XD-{心动AppID}|用于支付宝支付后跳回|XD-ci2dos1ktzsca4f
{微信AppID}| 用于微信授权登录后跳回|wx19f231d77ac408d9|微信AppID自带前缀wx，不用再次添加
tencent{QQ AppID}|用于QQ授权登录后跳回|tencent317081|如果给到的心动AppID没有对应的QQ AppID，可以不配置该项
tt{TapTap AppID}|用户TapTap授权登录后跳回|tt123456

<span id="44配置infoplist">

#### 4.4.配置info.plist

修改项目的info.plist，在<dict>节点中添加下列内容。修改的内容主要为了保证QQ和微信登录能够正常运行。

```
<key>LSApplicationQueriesSchemes</key>
<array>
<string>tapsdk</string>
<string>mqq</string>
<string>mqqapi</string>
<string>wtloginmqq2</string>
<string>mqqopensdkapiV4</string>
<string>mqqopensdkapiV3</string>
<string>mqqopensdkapiV2</string>
<string>mqqwpa</string>
<string>mqqOpensdkSSoLogin</string>
<string>mqqgamebindinggroup</string>
<string>mqqopensdkfriend</string>
<string>mqzone</string>
<string>weixin</string>
<string>wechat</string>
// 4.1.0
<string>weixinULAPI</string>
</array>
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>

```

<span id="45配置工程capability">

#### 4.5.配置工程capability

更新SDK 4.1.0之后， 
<p style="color:red">需要在xcode工程中添加两项capability：Associated Domains \ Sign in with apple.</p>

如下图:

<img src="img/4.png"></img>


Associated Domains添加一项，格式为『applinks + 域名』如「applinks:www.xd.com」。
<p style="color:red">域名为游戏官网地址，请联系平台方确认</p>

<span id="46处理第三方应用跳回事件">

#### 4.6.处理第三方应用跳回事件

在AppDelegate.m中增加如下三个方法，如果已经存在这些方法，在其中追加相应的处理代码即可。

<p style="color:red">SDK 4.1.0 新增universalLink处理</p>

```
- (BOOL)application:(UIApplication *)application
openURL:(NSURL *)url
sourceApplication:(NSString *)sourceApplication
annotation:(id)annotation {
return [XDCore HandleXDOpenURL:url];
}

- (BOOL)application:(UIApplication *)app
openURL:(NSURL *)url
options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
return [XDCore HandleXDOpenURL:url];
}

- (BOOL)application:(UIApplication *)application continueUserActivity:(NSUserActivity *)userActivity restorationHandler:(void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
    return [XDCore handleOpenUniversalLink:userActivity];
}
```

<span id="5接口调用">

### 5.接口调用

<span id="51配置sdk登录选项">

#### 5.1.配置SDK登录选项

<p>心动SDK提供配置苹果登录、TapTap、QQ、微信登录、游客登录的显示与隐藏以及登录方式。</p>

<p style="color:red">请勿直接复制以下代码，根据游戏实际需求选择调用。(以下API为旧接口，建议直接使用自定义入口顺序功能)</p>

```
[XDCore hideGuest]; //隐藏游客登录
[XDCore hideWX]; //隐藏微信登录
[XDCore hideQQ]; //隐藏QQ登录
[XDCore showVC];//显示VeryCD登录（此接口供老游戏兼容，新游戏不建议调用）
[XDCOre setQQWeb]; //设置QQ为Web登录方式
[XDCore setWXWeb];//设置微信为Web 扫码登录方式
[XDCore hideTapTap];//隐藏TapTap登录

```

<p style="color:red">SDK版本3.2.17添加了新接口，自定义登录按钮及顺序。可以在SDK初始化之前调用。具体说明如下：</p>

<p style="color:red">SDK版本4.1.0添加了新入口：苹果登录</p>

 自定义登录入口。共五种，其中主要两种，次要三种。
 

1、默认显示为：微信、QQ、游客、苹果、TapTap
 
2、各登录方式对应名称如下：
 
-  微信登录：WX_LOGIN，
-  taptap登录：TAPTAP_LOGIN，
-  QQ登录：QQ_LOGIN，
-  游客登录：GUEST_LOGIN，
-  心动登录：XD_LOGIN
-  苹果登录：APPLE_LOGIN

<p style="color:red">由于苹果审核要求，iOS13 显示第三方登录的同时必须显示苹果登录(建议位置靠前)</p>

<p style="color:red">SDK 在iOS12及以下、安卓中使用web实现苹果登录，但是若新游戏iOS版未上架appstore，无法使用web版苹果登录，游戏需在iOS应用上架之后，才打开iOS12系统及以下和安卓的苹果登录入口。</p>
 
3、例，传入的数组。
 @[@"APPLE\_LOGIN",@"WX\_LOGIN",@"TAPTAP\_LOGIN",@"GUEST\_LOGIN",@"QQ\_LOGIN"]

注：

- 传入为空或nil，则当做隐藏所有按钮，直接显示心动登录。
- 最多只能显示5种登录方式。
- 登录按钮TapTap和心动登录不能同时显示

```
// 自定义登录按钮及顺序
[XDCore setLoginEntries:@[@"APPLE_LOGIN",@"WX_LOGIN",@"TAPTAP_LOGIN",@"GUEST_LOGIN",@"QQ_LOGIN"]];
```

<span id="52实现sdk协议">

4、自定义登录入口

<p style="color:red">XDSDK 4.3.1开始，支持游戏自定义登录入口。入口素材由平台提供</p>

增加自定义登录接口（iOS:AutoLogin/TapTapLogin/AppleLogin/GuestLogin,Android:AutoLogin/TapTapLogin），游戏绘制登录按钮后调用.

**调用方法 ：** 调用autologin，根据登录回调看是否自动登录成功，如果自动登录失败，回调信息为『自动登录失败』，如果没有成功就显示登录界面，用户点击不同登录按钮然后调用对应登录:taptaplogin等。

**（自定义绘制登录按钮时，点击防沉迷切换账号按钮会回调登录取消）**

接口如下：



```
// 自动登录（若有上次登录记录，则会直接登录）
public static bool AutoLogin() 
// TapTap登录
public static void TapTapLogin() 
// 苹果登录
public static void AppleLogin() 
// 游客登录
public static void GuestLogin() 

```


示例：

<img src="img/5.jpg"></img>

#### 5.2.实现SDK协议

游戏调用SDK接口后，结果以Protocol方式回调给游戏，游戏需要实现XDCallback.h中声明的方法。
<br/>
代码示例：

```

[XDCore setCallBack:[YourCallBack new]];

#import "YourCallBack.h"
@interface YourCallBack()<XDCallback>
@end

@implementation YourCallBack

/*初始化成功*/
- (void)onInitSucceed{
}

/*初始化失败*/
- (void)onInitFailed:(nullable NSString*)error_msg{
}

/*登录成功*/
/*access_token:登录成功，获取到用户的token。游戏根据token获取用户信息。*/
- (void)onLoginSucceed:(nonnull NSString*)access_token{
}

/*登录失败*/
/*error_msg: 登录失败的报错信息*/
- (void)onLoginFailed:(nullable NSString*)error_msg{
}

/*登录取消*/
- (void)onLoginCanceled{
}

/*游客绑定成功*/
/*access_token: 游客升级成功，获取新的token。
  后续如需使用 token，务必使用回调给的新 token。但已生效的会话无须处理。
  */
- (void)onBindGuestSucceed:(nonull NSString*)access_token{
}

/*登出成功*/
- (void)onLogoutSucceed{
}

/*支付完成*/
- (void)onPayCompleted{
}

/*支付失败*/
/*error_msg:支付失败的错误信息*/
- (void)onPayFailed:(nullable NSString*)error_msg{
}

/*支付取消*/
- (void)onPayCanceled{
}

/* 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
   @param paymentInfos 订单信息数组。
   单个未完成订单信息包含：   TransactionIdentifier ：订单标识 ，恢复购买时需要回传
                           		 	 Product_Id ：商品ID，
                               		    Quantity：商品数量
 */
- (void)restoredPayment:(nonnull NSArray*)paymentInfos;

```

<span id="53初始化sdk">

#### 5.3.初始化SDK

初始化心动SDK，请统一使用下述接口，调用该接口是调用其它功能接口的前置必要条件。

```
/**
 初始化sdk，包含心动SDK，TapDB统计SDK

 @param appid 心动appid
 @param orientation 屏幕方向
 @param channel 渠道号
 @param version 版本号
 @param enableTapdb 是否开启TapDB
 */
+ (void)init:(nonnull NSString*)appid orientation:(int)orientation
     channel:(nonnull NSString*)channel version:(nonnull NSString*)version
 enableTapdb:(BOOL)enableTapdb;

```

<p>调用该接口会触发下列回调。</p>
<p style="color:red">
注意：<br>
1）其他接口请在获取到初始化成功回调之后进行调用。<br>
2）已经单独接入 TapDB 的项目请勿开启内置 TapDB 统计功能。<br>
3）SDK 初始化时如果未设置或无法获取到 TapDB AppId，TapDB 统计服务将自动设置为关闭。<br>
其他注意事项请参考 Unity 文档 TapDB 章节或与平台联系。
</p>

类别 | 回调方法
--- |---
初始化成功 | -(void)onInitSucceed
初始化失败 | -(void)onInitFailed:(nullable NSString*)error_msg

<span id="54登录">

#### 5.4.登录

调用该接口进行登录。

```
/*登录*/
+ (void)login;
```

<p>调用该接口会触发下列回调。</p>
<p style="color:red">获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</p>

类别 | 回调方法
--- | ---
登录成功 | - (void)onLoginSucceed:(nonnull NSString*)access_token;
登录失败 | - (void)onLoginFailed:(nullable NSString*)error_msg;
登录取消 | - (void)onLoginCanceled;

<span id="55获取access-token">

#### 5.5.获取Access Token

调用该接口获取当前登录用户的access token。

```
/**
* @return 当前登录用户的access token，无登录用户时，返回空字符串
*/
+ (nullable NSString *)getAccessToken;
```

<span id="56获取当前登录状态">

#### 5.6.获取当前登录状态

调用该接口获取当前登录状态。

```
/**
* @return YES表示已经登录，NO表示未登录
*/
+ (BOOL)isLoggedIn;

```

<span id="57打开用户中心">

#### 5.7.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```
/*
* @return YES,开启成功 NO，开启失败
*/
+ (BOOL)openUserCenter;
```

<span id="58发起支付">

#### 5.8.发起支付

<p style='color:red'>
为了收到支付回调，需要在应用启动后就设置好支付相关功能。
</p>

```
- (BOOL)application:(UIApplication*)application didFinishLaunchingWithOptions:(NSDictionary*)launchOptions
{
	...
	// 初始化支付
	[XDCore setupXDStore];
}
```

**5.8.1 正常支付**

调用该接口发起支付。当前版本SDK仅支持AppStore支付。

```
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
+ (void)requestProduct:(nonull NSDictionary*)productInfo

```
其中info的字段如下。

参数 | 必须 |说明
--- | --- |--- 
Product_Name | 是 |商品名称，建议以游戏名称开头，方便财务对账
Product_Id | 是 | 商品ID，到AppStore购买的商品
Product_Price | 是 | 商品价格（单位分），对于AppStore支付，该字段没有用处，但是需要传递真实金额，有多处需要用到
Sid | 是 |所在服务器ID，不能有特殊字符，服务端支付回调会包含该字段
Role_Id | 否 | 支付角色ID，服务端支付回调会包含该字段
OrderId | 否 | 游戏侧订单号，服务端支付回调会包含该字段
EXT | 否 | 额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：[prdInfo setObject:@"{\\"payCallbackCode\\":1}" forKey:@"EXT"];

<p style = "color:red">
EXT 信息可能会被篡改，请勿信任该参数内容派发商品。
</p>


**5.8.2 恢复支付**
<p style = "color:red">
恢复支付逻辑，SDK 4.0.1之后添加。
</p>
优化前：

在玩家第一笔掉单时，SDK 一直处于等待接收收据的状态，此时，
用户一直在游戏中，苹果随时可能发送收据给 SDK，一旦发送，SDK 就会通知游戏发送道具；
用户关闭游戏（杀进程或退后台），此时 SDK 不再接收苹果收据。导致即使这期间如果苹果有发送收据来，SDK 也收不到。除非玩家第二次充值，苹果会连同上一笔未完成订单一次性发送，造成玩家同时收到两笔道具的情况。

优化后：

当玩家再次打开游戏，SDK 再次向苹果请求一次收据信息。如有掉单的收据，且玩家登录成功后，则通知游戏，游戏来收到通知后来决定是否要补发道具。
<p style = "color:red">
游戏内购流程图：
</p>
<img src="img/3.png"></img>

<p style = "color:red">
注意: 如果有遗留未完成订单，在接收到恢复订单回调后，(若单个用户可能拥有多个账号，可以请求用户确认后）调用恢复订单接口。
</p>

说明：

在掉单的情况下，SDK只能获取订单的基本信息，如商品ID、苹果侧订单ID（非游戏生成order_id）和商品数量，不能直接对应到用户，所以无法直接兑换商品。

游戏在收到掉单回调之后，可以弹窗请用户确认是否需要恢复商品，如需要，则用回调提供的已有参数，加上其他需要的参数，如角色ID，服务器ID等，使用恢复订单接口恢复该商品。

<p style = "color:red">
SDK会提供测试包，供游戏使用沙盒测试（购买之后会造成掉单），游戏调用恢复接口如果成功到账则为测试成功。
</p>


游戏内弹窗示例：
<img src="img/1.jpg"></img>



回调方法

```
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param paymentInfos 订单信息数组。
/// 单个未完成订单信息包含：   TransactionIdentifier ：订单标识 ，恢复购买时需要回传
///                            		  Product_Id ：商品ID，
///                                		 Quantity：商品数量
- (void)restoredPayment:(nonnull NSArray*)paymentInfos;

```


恢复订单接口

```
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
+ (void)restoreProduct:(nonull NSDictionary*)productInfo

```
其中productInfo的字段如下。

参数 | 必须 |说明
--- | --- |--- 
TransactionIdentifier | 是 | 需要恢复的订单标识，SDK恢复订单回调中包含
Product_Name | 是 |商品名称，建议以游戏名称开头，方便财务对账
Product_Id | 是 | 商品ID，到AppStore购买的商品
Product_Price | 是 | 商品价格（单位分），对于AppStore支付，该字段没有用处，但是需要传递真实金额，有多处需要用到
Sid | 是 |所在服务器ID，不能有特殊字符，服务端支付回调会包含该字段
Role_Id | 否 | 支付角色ID，服务端支付回调会包含该字段
OrderId | 否 | 游戏侧订单号，服务端支付回调会包含该字段
EXT | 否 | 额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：[prdInfo setObject:@"{\\"payCallbackCode\\":1}" forKey:@"EXT"];

**5.8.3 支付结果**

调用发起支付和恢复支付接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | - (void)onPayCompleted;
支付失败 | - (void)onPayFailed:(nullable NSString*)error_msg;
支付取消 | - (void)onPayCanceled;

<span id="59登出">

#### 5.9.登出
需要注销当前登录用户时调用，该操作不会出现登录界面。

```
+ (void)logout;

```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | - (void)onLogoutSucceed;

<span id="510游客升级">

#### 5.10.游客升级

调用下列方法可直接调起游客升级界面：
`+ (BOOL)openUserBindView;`

当游客账号升级成功或失败时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | - (void)onGuestBindSucceed:(nonull NSString*)access_token;

类别 | 回调方法
--- | ---
游客升级失败 | - (void)onGuestBindFail:(nonnull NSString*)errorMsg

<span id="511微信分享">

#### ~~5.11.微信分享~~
<p style = "color:red">
注意: 该版本微信分享模块已废弃！！！后续更新版本将彻底移除微信分享，如有相关分享需求请自行对接第三方平台 SDK。
</p>

调用XDWXShare文件中的以下方法，使用微信分享功能。

```
+ (void)WXShareWithObject:(XDWXShareObject*)shareObject;

```

XDWXShareObject详细参数说明

通用参数 | 是否必须 | 类型| 说明
--- | --- | --- | ---
text | 否 | NSString | 分享文字内容
bText | 是 | BOOL | 分享内容是否为多媒体内容（YES文本内容，NO多媒体内容）
scene | 是 | int | 分享场景（0对话，1朋友圈，2收藏）
type | 是 | int | 分享类型（0文本，1图片，2音乐，3视频，4网页）
title | 否 | NSString | 分享标题
descriptionStr | 否 | NSString | 分享描述信息
thumbData | 否 | NSData | 缩略图数据
thumbPath | 否 | NSString | 缩略图路径
thumbImage | 否 | UIImage | 缩略图对象（优先级thumbImage>thumbPath>thumbData,若都未进行设置，则不显示缩略图）
meidaTagName | 否 | NSString |
messageExt | 否 | NSString |
messageAction | 否 | NSString |

以下参数，请根据不同的分享类型（type参数）进行设置

图片分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
imageData | 否| NSData | 分享图片数据
imageUrl | 否| NSString | 分享图片Url（imageData、imageUrl不可同时为空）
<br/>


音乐分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
musicUrl | 是 | NSString | 音乐链接
musicLowBandUrl | 否 | NSString | 低带宽音乐链接
musicDataUrl | 否 | NSString | 音乐数据链接
musicLowBandDataUrl | 否 | NSString | 低带宽状音乐数据链接
<br/>

视频分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
videoUrl | 是 | NSString | 视频链接
videoLowBandUrl | 否 | NSString | 低带宽视频链接
<br/>


网页分享参数 | 是否必须 | 类型| 说明
--- | --- | --- | ---
webpageUrl | 是 | NSString | 网页链接


API调用示例
在分享之前，需要设置分享回调

```
#import <XdComPlatform/XDWXShare.h>

@interface YourCallBack()<XDWXShareCallBack>

[XDWXShare setWXShareCallBack:YourCallBack];

XDWXShareObject * obj = [XDWXShareObject shareObject];

obj.text = "text";
obj.title = "title";
...
...

[XDWXShare WXShareWithObject:obj];

```

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
分享成功 | - (void)onWXShareSucceed;
分享失败 | - (void)onWXShareFailed:(nullable NSString*)error_msg;

<p style = "color:red">
注意: 在进行分享时，若用户选择留在微信，则无法收到分享回调，此处不可以完全依赖上述回调事件。
</p>

<span id="512实名认证">

#### 5.12.实名认证

在用户登录成功状态下，调用该接口打开实名认证窗口。

```
/*实名认证*/
+ (void)openRealName;

```

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
认证成功 | - (void)onRealNameSucceed;
认证失败 | - (void)onRealNameFailed:(nullable NSString*)error_msg;

<p style = "color:red">
注意: 用户的实名认证状态以服务端接口（6.1）authoriz_state参数为准。
</p>

<span id="513用户反馈">
#### 5.13.用户反馈
在用户登录成功状态下，调用该接口打开实名认证窗口。游客需要先进行实名制。

```
/**
 用户反馈
 */
+ (void)userFeedback;

```

<span id="514TapTap论坛">
#### 5.14.TapTap论坛
请先联系XDSDK相关人员申请开通论坛。

配置info.plist

```
<key>NSPhotoLibraryUsageDescription</key>   
<string>XXXX需要您的同意,才能访问相册</string>
<key>NSCameraUsageDescription</key>   
<string>XXXX需要您的同意,才能访问相机</string>
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>
```

引入头文件
『#import \<TapTapSDK/TapTapSDK.h\>』

打开论坛

```
//appid 游戏论坛ID，与TapTap开发者ID不同
[TapTapSDK openTapTapForum:(NSString *)appid];

// 指定帖子地址
[TapTapSDK openTapTapForum:(NSString *)appid uri:(NSString *)u];
```
<span id="515防沉迷">
#### 5.15.防沉迷
XDSDK集成防沉迷相关功能，支持单机与联网游戏。
防沉迷计时提供开始和关闭接口，游戏可根据需求调用。

```
/// 恢复时长统计
+ (void)gameResume;

/// 停止时长统计
+ (void)gameStop;

```


<span id="6广告部分说明">
### 6.广告部分说明
XDSDK内部集成了部分主要渠道广告SDK，包括今日头条巨量广告平台SDK（TTTracker.framework，版本2.0.6），和腾讯广点通SDK（GDTActionSDK.framework，版本1.4.9）。必要事件（如注册）会在SDK内部发送，充值事件由XDSDK服务端发送事件到相应平台。游戏不用做额外对接工作。

需要接入相应平台的SDK请联系XDSDK后端配置广告参数。游戏打包时加入对应的SDK即可。

注意：

1.广点通SDK在添加到Link Binary With Libraries之后，还必须添加到Embedded Contend中。

2.build setting 中Other Link Flag 中添加-ObjC。
	

<span id="7服务端对接">
### 7.服务端对接

<span id="71获取用户信息">

#### 7.1.获取用户信息
游戏服务端使用客户端获取的access token，按照下面的方式获取用户信息。

```
接口：https://api.xd.com/v1/user
method：GET
参数：access_token
请求示例：https://api.xd.com/v1/user?access_token=1234
成功判断：返回的HTTP Code为200时表示成功，否则失败
返回数据格式：application/json
返回值示例：
{"id":"1",
"id_card":"1111",
"name":"xdname",
"adult_type":0,
"friendly_name":"xdfriendly_name",
"client_id":"abc",
"phone":"1",
"safety":false,
"site":"1"}
id：用户的ID，注意类型是字符串
id_card：加密的身份证号，可能为空
name：用户的账号名称
adult_type: 0.未实名 1. 0-8岁 2. 8-16岁 3. 16-18岁 4. 18+岁
friendly_name：用户的昵称，如果游戏想要展现用户名称，建议使用该字段
client_id：该用户在该游戏登录时使用的心动AppID
phone： 绑定的手机号码
safety： 账号是否安全/通过设备二次验证（true：安全，false：不安全）
site：账号类型, 0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，10 => 苹果账号，注意类型是字符串
fcm：0/1（0：无需防沉迷，1：需要防沉迷）
authoriz_state：0/1/2/3/4（实名状态,0未实名，>0 都表示已实名认证）
```

应用场景 | 参数以及使用方法
--- | ---
判断是否游客账号 | 游客账号的name和id相同
判断是否通过二次验证 | safety（0未验证，>0已验证）
判断账号类型 | site（0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串）
判断防沉迷状态 | fcm（0：无需防沉迷，1：需要防沉迷）
判断是否实名认证 | authoriz_state（0未实名，>0 都表示已实名认证）

<span id="72处理支付回调">

#### 7.2.处理支付回调
游戏服务端需要提供一个能够处理支付回调的接口，这个接口是申请心动AppID时需要的。处理逻辑中，需要使用一个密钥进行加密验证，该密钥即为心动AppKey。
当心动平台处有充值成功时，心动服务端会通知到支付回调接口，信息如下。

```
method：POST
数据格式：application/x-www-form-urlencoded

```
<p style="color:red">
请勿信任透传参数
</p>

字段如下。


字段 | 类型 | 描述
--- | --- | ---
order_id | number | 心动平台的订单号，相同订单号表示是同一笔支付
payment | string | 支付方式，appstore或其它（若回调无该字段，则默认为appstore）
sub_payment | string | 子支付方式，Production、Sandbox或其他，为Sandbox表示苹果沙盒充值（值可能为空）
user_id | string | 充值用户ID，注意类型是字符串
client_id | string | 充值的心动AppID
app | string | 同client_id
app_id | string | 游戏客户端调用充值时传递的Sid字段
app\_order_id | string | 游戏客户端调用充值时传递的OrderId字段
role_id | string | 游戏客户端调用充值时传递的Role_Id字段
product_id | string | 支付购买的商品ID
gold | number | 支付实际所付金额，单位元。（仅在客户端使用非AppStore支付方式支付时才有该字段）
ext | string | 游戏客户端调用充值时传递的EXT字段
timestamp | number | 时间戳，1970年到当前时间的秒数
sign | string | 签名校验字段，按照下面的方式进行校验

签名算法示例，使用php语言。

```
/**
* @param params 类型array，支付回调时收到的参数
* @param appKey 类型string，心动AppKey
*/
function verify_sign($params, $appKey) {
$tmp = $params;
$sign = $tmp['sign'];
unset($tmp['sign']);
ksort($tmp);

return strcasecmp($sign, md5(http_build_query($tmp) . $appKey)) == 0;
}
```

<p style="color:red">
需要注意
<br/>
1、游戏服务端应该按照order_id进行排重，相同order_id仅生效一次。
<br/>
2、游戏服务端成功处理了支付回调后，应当返回字符串“success”，如果是一笔已经处理的重复的订单，也应该返回“success”。
<br/>
3、只要通过签名校验的回调，都应该视为合法数据，按照如下逻辑发放道具。A.如果payment字段为appstore，即AppStore支付，直接按照product_id字段进行道具发放；B.如果payment字段为其它值，需要验证gold字段和 product_id 字段是否相符，如果相符，按照product_id发放道具，如果不相符，直接按照gold字段折算成对应的游戏货币发放。
</p>
