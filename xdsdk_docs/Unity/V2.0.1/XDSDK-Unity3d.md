# <center> XDSDK-Unity3d </center>


## 1.Unity

<p style="color:red"> namespace均为xdsdk </p>

### 1.1.导入SDK资源

<p> 下载“XDSDK For Unity 3D”版本的SDK包。将其中的XDSDKForUnity.unitypackage文件导入到Unity工程里面（如果无法导入，请再次确认文件是放置于非中文路径下的），如下图所示： </p>

<img src="img/1.png"></img>

目录或文件 | 用途
--- |---
Plugins/script/XDSDK.cs | 心动SDK接口
Plugins/script/XDCallback.cs | 心动SDK回调
Plugins/script/XDSDKImp.cs | 心动SDK调用原生方法
Plugins/Android/libs | 心动SDK Android依赖库
Plugins/Android/res | 心动SDK Android资源文件
Plugins/iOS/libRMStore | 心动SDK iOS支付库组件
Plugins/iOS/libWeChatSDK | 心动SDK iOS微信依赖库
Plugins/iOS/libXDSDKiOSWrapper | 心动SDK iOS桥接组件
Library/TencentOpenAPI.framework | 心动SDK iOSQQ登录库文件
Library/XdComPlatform.framework | 心动SDK iOS核心依赖库 
Library/XDStore.framework | 心动SDK iOS支付组件


<p> 导入后，将Plugins/script下面的XDSDKListener.cs脚本文件拖动到长生命周期的对象中进行脚本挂接。 </p>



### 1.2.实现并设置回调方法

<p> 脚本需要实现的回调请参考以下代码： </p>

```
public class XDSDKHandler : XDCallback {

    //初始化成功回调
    public override void OnInitSucceed (){

    }
	
    //初始化失败回调
    public override void OnInitFailed (string msg){

    }

    //登录成功回调
    public override void OnLoginSucceed (string token){

    }

    //登录失败回调
    public override void OnLoginFailed (string msg){

    }
	
    //登录取消回调
    public override void OnLoginCanceled (){

    }

    //游客绑定成功回调
    public override void OnGuestBindSucceed (string token){

    }

    //游客绑定失败回调（可选）
    public override void OnGuestBindFailed(string msg){

    }

    //登出回调
    public override void OnLogoutSucceed (){

    }

    //支付完成回调
    public override void OnPayCompleted (){

    }

    //支付失败回调
    public override void OnPayFailed (string msg){

    }

    //支付取消回调
    public override void OnPayCanceled (){  

    }

    //Android 退出回调
    public override void OnExitConfirm (){

    }

    //Android 取消退出回调
    public override void OnExitCancel (){

    }

    //微信分享成功回调（可选）
    public override void OnWXShareSucceed (){

    }

    //微信分享失败回调（可选）
    public override void OnWXShareFailed (){

    }
    
    //实名认证成功
    public override void OnRealNameSucceed (){

    }
    
    //实名认证失败
    public override void OnRealNameFailed (string error_msg){

    }
    
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param resultList 订单信息List。
/// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传
///                             		 Product_Id ：商品ID，
///                                        Quantity：商品数量
public override void RestoredPayment(List<Dictionary<string,string>> resultList){
    }

}
```

<p>设置回调方法 </p>

```
XDSDK.SetCallback (new XDSDKHandler ());
```

### 1.3.配置登录选项

<p>心动SDK提供配置QQ、微信登录、游客登录的显示与隐藏以及登录方式。</p>

<p>如不进行配置，SDK将默认显示QQ、微信、游客登录。QQ和微信的登录方式默认为App授权登录，心动SDK会根据QQ和微信的安装情况，将QQ和微信登录方式切换为Web登录，或者不提供对应的登录功能。</p>

<p style="color:red">请勿直接复制以下代码，根据游戏实际需求选择调用以下API</p>

```
XDSDK.HideGuest()	//隐藏游客登录
XDSDK.HideWX()		//隐藏微信登录
XDSDK.HideQQ()		//隐藏QQ登录
XDSDK.ShowVC()		//显示VeryCD登录（此接口供老游戏兼容，新游戏不建议调用）
XDSDK.SetQQWeb()	//设置QQ为Web登录方式
XDSDK.SetWXWeb()	//设置微信为Web 扫码登录方式
XDSDK.HideTapTap()	//隐藏TapTap登录，使用心动登录
```
<p style="color:red">SDK版本1.1.3添加了新接口，自定义登录按钮及顺序。可以在SDK初始化之前调用。具体说明如下：</p>


 自定义登录入口。共五种，其中主要两种，次要两种。
 

1、默认显示为：微信、TapTap、游客、QQ
 
2、各登录方式对应名称如下：
 
-  微信登录：WX_LOGIN，
-  taptap登录：TAPTAP_LOGIN，
-  QQ登录：QQ_LOGIN，
-  游客登录：GUEST_LOGIN，
-  心动登录：XD_LOGIN
 
3、例，传入的数组。
 {"WX\_LOGIN","TAPTAP\_LOGIN","GUEST\_LOGIN","QQ\_LOGIN"}

注：

- 最多只能显示4种登录方式。
- 四个登录按钮TapTap和心动登录不能同时显示

```
// 自定义登录按钮及顺序
XDSDK.SetLoginEntries({"WX_LOGIN","TAPTAP_LOGIN","GUEST_LOGIN","QQ_LOGIN"});
```
### 1.4.初始化SDK

初始化心动SDK，调用该接口是调用其它功能接口的必要条件。

```
/**
 * @param appid 心动AppID
 * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏
 * @param channel 渠道号
 * @param version 版本号
 * @param enableTapDB 是否开启TapDB
 */
public static void InitSDK(string appid, int aOrientation, string channel, string version, bool enableTapDB)
```

<p>示例代码：</p>

```
XDSDK.InitSDK ("xxxxxx", 1,"xx","xx",true);
```

<p>调用该接口会触发下列回调。</p>
<p style="color:red">其他接口请在获取到初始化成功回调之后进行调用。</p>

类别 | 回调方法
--- |---
初始化成功 | public void OnInitSucceed()
初始化失败 | public void OnInitFailed(string msg)


<p style="color:red">注意：</p>
<p style="color:red">已经单独接入TapDB的项目请勿开启内置TapDB统计功能</p>
<p style="color:red">其他注意事项请参考文档TapDB部分或与平台联系</p>


### 1.5.登录

调用该接口进行登录。

```
public static void Login()
```

示例代码
```
XDSDK.Login();
```

<p>调用该接口会触发下列回调。</p>
<p style="color:red">获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</p>

类别 | 回调方法
--- | ---
登录成功 | void OnLoginSucceed(string token)
登录失败 | void OnLoginFailed(string msg)
登录取消 | void OnLoginCanceled()

### 1.6.获取Access Token

调用该接口获取当前登录用户的access token。

```
public static string GetAccessToken()
```

代码示例
```
XDSDK.GetAccessToken()
```

### 1.7.获取当前登录状态

```
public static bool IsLoggedIn()
```
代码示例
```
XDSDK.IsLoggedIn()
```

### 1.8.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```
/**
* @return false表示尚未登录，重复调用默认为成功
*/
public static bool OpenUserCenter()
```
代码示例
```
XDSDK.OpenUserCenter()
```

### 1.9.发起支付

<p style='color:red'>不保证在任何情况下都能收到回调，请勿直接使用SDK返回的支付结果作为最终判定订单状态的依据。
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


**1.9.1 发起支付**

调用该接口发起支付。

```
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static bool Pay(Dictionary<string, string> info)
```
其中info的字段如下。

参数 | 必须 |说明
--- | --- |--- 
Product_Name | 是 |商品名称，建议以游戏名称开头，方便财务对账
Product_Id | 是 | 商品ID
Product_Price | 是 | 商品价格（单位分）
Sid | 是 |所在服务器ID，不能有特殊字符，服务端支付回调会包含该字段
Role_Id | 否 | 支付角色ID，服务端支付回调会包含该字段
OrderId | 否 | 游戏侧订单号，服务端支付回调会包含该字段
EXT | 否 |额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：info.Add("EXT", "{\"payCallbackCode\":2}");

**1.9.2 恢复支付**
<p style = "color:red">
注意: 如果有遗留未完成订单，在接收到恢复订单回调后，(若单个用户可能拥有多个账号，可以请求用户确认后）调用恢复订单接口。
</p>

说明：

在掉单的情况下，SDK只能获取订单的基本信息，如商品ID、苹果侧订单ID（非游戏生成order_id）和商品数量，不能直接对应到用户，所以无法直接兑换商品。

游戏在收到掉单回调之后，可以弹窗请用户确认是否需要恢复商品，如需要，则用回调提供的已有参数，加上其他需要的参数，如角色ID，服务器ID等，使用恢复订单接口恢复该商品。

回调方法

```
/// 有未完成的订单回调，比如：礼包码.注意：多个未完成订单会在一个数组中一起回调。（只会在登录状态下回调）
/// @param resultList 订单信息List。
/// 单个未完成订单信息包含：     TransactionIdentifier ：订单标识 ，恢复购买时需要回传	
///                          	 	   Product_Id ：商品ID，
///                                        Quantity：商品数量
public override void RestoredPayment(List<Dictionary<string,string>> resultList){
    }
```


恢复订单接口

```
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static bool RestorePay(Dictionary<string, string> info)

```
其中info的字段如下。

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

**1.9.3 支付结果**

调用发起支付和恢复支付接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void OnPayCompleted()
支付失败 | public void OnPayFailed(string msg) 
支付取消 | public void OnPayCanceled()

示例代码

```
Dictionary<string, string> info = new Dictionary<string,string>();
info.Add("OrderId", "1234567890123456789012345678901234567890");
info.Add("Product_Price", "1");
info.Add("EXT", "abcd|efgh|1234|5678");
info.Add("Sid", "2");
info.Add("Role_Id", "3");
info.Add("Product_Id", "4");
info.Add("Product_Name", "648大礼包");
info.Add("EXT", "{\"payCallbackCode\":2}");（）
XDSDK.Pay (info);
```

### 1.10.登出

需要注销当前登录用户时调用，该操作不会出现登录界面。

```
public static void Logout() 
```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | public void OnLogoutSucceed() 

示例代码
```
XDSDK.Logout();
```

### 1.11.游客升级

当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void OnGuestBindSucceed(string token)

### 1.12.退出

调用该方法时，弹出确认框供用户选择是否退出。

```
public static void Exit()
```

示例代码

```
XDSDK.Exit();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnExitConfirm() 
取消退出 | public void OnExitCancel() 

### 1.13.微信分享（微信分享功能即将停止维护，建议单独接入）

调用心动SDK的微信分享功能。

参数说明


通用参数 | 是否必须 | 类型 | 说明 
--- | --- | --- | ---
text | 否 | string | 分享文字内容 
bText | 是 | string | 分享内容是否为多媒体内容（1文本内容，0多媒体内容）
scene | 是 | string | 分享场景（SESSION对话，TIMELINE朋友圈，FAVOURITE收藏）
shareType | 是 | string | 分享类型（TEXT，IMAGE，MUSIC，VIDEO，WEB）
title | 否 | string | 分享标题 
description | 否 | string | 分享描述信息 
thumbPath | 否 | string | 缩略图路径 （安卓不支持Url，请填写文件路径。）
meidaTagName | 否 | string
messageExt | 否 | string 
messageAction | 否 | string

以下参数，请根据不同的分享类型（shareType参数）进行设置

图片分享 | 是否必须 | 类型| 说明 
--- | --- | --- | ---
imageUrl | 是| string | 分享图片Url （安卓不支持Url，请填写文件路径）
<br/>


音乐分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
musicUrl | 是 | string | 音乐链接 （请填写音乐路径。例：https://www.xd.com/music.mp3）
musicLowBandUrl | 否 | string | 低带宽音乐链接
musicDataUrl | 否 | string | 音乐数据链接
musicLowBandDataUrl | 否 | string | 低带宽状音乐数据链接
<br/>

视频分享 | 是否必须 | 类型| 说明
--- | --- | --- | ---
videoUrl | 是 | string | 视频链接
videoLowBandUrl | 否 | string | 低带宽视频链接
<br/>


网页分享参数 | 是否必须 | 类型| 说明
--- | --- | --- | ---
webpageUrl | 是 | string | 网页链接

示例代码

```
//分享文字
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***");  //标题
content.Add ("description", "***description***"); //描述
content.Add ("text", "***text***"); //内容
content.Add ("scene", "SESSION"); //scene场景值
content.Add ("shareType", "TEXT");  //分享类型 文字
xdsdk.XDSDK.Share (content);

//分享图片
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***");  //标题
content.Add ("description", "***description***");  //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("imageUrl", "/storage/emulated/0/2.png"); //图片路径
content.Add ("scene", "SESSION"); //scene场景值
content.Add ("shareType", "IMAGE");  //分享类型 图片
xdsdk.XDSDK.Share (content);

//分享音乐
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***"); //标题
content.Add ("description", "***description***"); //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("musicUrl", "http://staff2.ustc.edu.cn/~wdw/softdown/index.asp/0042515_05.ANDY.mp3");  //音乐url
content.Add ("scene", "SESSION");  //scene场景值
content.Add ("shareType", "MUSIC");  //分享类型 音乐
xdsdk.XDSDK.Share (content);

//分享视频
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***"); //标题
content.Add ("description", "***description***"); //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("videoUrl", "https://www.xd.com");  //视频url
content.Add ("scene", "SESSION");  //scene场景值
content.Add ("shareType", "VIDEO");  //分享类型 视频
xdsdk.XDSDK.Share (content);

//分享网页
Dictionary<string, string> content = new Dictionary<string, string> ();
content.Add ("title", "***title***"); //标题
content.Add ("description", "***description***"); //描述
content.Add ("thumbPath", "/storage/emulated/0/2.png"); //预览图路径
content.Add ("webpageUrl", "https://www.xd.com");  //视频url
content.Add ("scene", "SESSION");  //scene场景值
content.Add ("shareType", "WEB");  //分享类型 网页
xdsdk.XDSDK.Share (content);
```


调用分享接口会触发下列回调

类别 | 回调方法
--- | ---
分享成功 | public void OnWXShareSucceed() 
分享失败 | public void OnWXShareFailed(string msg)

<p style = "color : red"> 
注意：分享过程中，若用户选择留在微信，则不会产生分享回调。游戏不应当完全依赖分享回调。
</p> 

### 1.14.实名认证

调用该方法时，弹出实名认证窗口。

```
public static void OpenRealName()
```

示例代码

```
XDSDK.OpenRealName();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
确认退出 | public void OnRealNameSucceed() 
取消退出 | public void OnRealNameFailed(string error_msg)
 
<p style = "color : red"> 
注意：实名认证结果以服务端authoriz_state参数为准（见4.1）。
</p> 

### 1.15.游客绑定

调用该方法时，弹出游客绑定窗口。

```
public void OpenUserBindView()
```

示例代码

```
XDSDK.OpenUserBindView ();
```

调用该接口会触发下列回调

类别 | 回调方法
--- | ---
成功 | public void OnGuestBindSucceed (string token)
失败 | public void OnGuestBindFailed(string msg)
 

### 1.16.客服

调用该方法时，弹出客服窗口。

```
public static void UserFeedback()
```

示例代码

```
XDSDK.UserFeedback();
```

### 1.17.TapDB

```
public static void SetLevel(int level)

public static void SetServer(string server)

```

示例代码

```
XDSDK.SetLevel(100);

XDSDK.SetServer("xxxxxxx");

```

PS：为了在Android平台跟踪玩家的游戏次数和时长，需要在游戏的每个Activity的onResume和onStop中添加对应的调用。

```
// 安卓
public static void OnResume();
public static void OnStop();
```


示例代码

```
// 安卓
XDSDK.OnResume();
XDSDK.OnStop();
```


<p style = "color : red"> 
注意：</br>
1.新版本SDK中，已经集成了TapDB的onStart、setUser方法，游戏客户端不需要再重复集成。</br>
2.提供了setLevel，setServer方法供游戏调用，充值统计由服务端完成。</br>
3.已接入TapDB的游戏在集成SDK时仅需要移除onStart和setUser方法，其余保持不变。</br>
4.尚未接入TapDB的游戏，可根据需要自行接入SDK中尚未包含的TapDB SDK的其他方法。</br>
5.如果需要自行接入TapDB，请在SDK初始化方法中enableTapDB参数填写false。
</p> 


## 2.Android

<p style = "color : red"> 
如果游戏打包后无法在AndroidP的机型上使用</br>
</p> 

1. 将[org.apache.http.legacy.jar](../org.apache.http.legacy.jar)打包到游戏内
2. AndroidManifest的Application标签下添加如下内容

```
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
```

### 2.1.按需要修改AndroidManifest

<p> 可以根据需要,参照如下示例修改Plugins/Android/AndroidManifest.xml。
</p>

```
<?xml version="1.0" encoding="utf-8"?>
<manifest
    xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.xd.sdkdemo"
    xmlns:tools="http://schemas.android.com/tools"
    android:installLocation="preferExternal"
    android:versionCode="1"
    android:versionName="1.0">
    <supports-screens
        android:smallScreens="true"
        android:normalScreens="true"
        android:largeScreens="true"
        android:xlargeScreens="true"
        android:anyDensity="true"/>

    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
    <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

    <application
        android:theme="@style/UnityThemeSelector"
        android:icon="@drawable/app_icon"
        android:label="@string/app_name"
        android:debuggable="true">

        <activity
            android:name="com.xd.sdklib.helper.XDStartView"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
            android:configChanges="orientation|keyboardHidden|screenSize" />
        <activity
            android:name="com.xd.sdklib.helper.XDViewActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
            android:configChanges="orientation|keyboardHidden|screenSize" />
        <activity
            android:name="com.xd.sdklib.helper.XDPayActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
            android:configChanges="orientation|keyboardHidden|screenSize" />
        <activity
            android:name="com.xd.sdklib.helper.XDWebView"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
        <activity
            android:name="com.xd.sdklib.helper.WXEntryActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />

        <!-- 微信登录 -->
        <activity-alias
            android:name=".wxapi.WXEntryActivity"
            android:label="@string/app_name"
            android:exported="true"
            android:targetActivity="com.xd.sdklib.helper.WXEntryActivity"/>

        <!-- Ping++ SDK -->
        <activity
            android:name="com.pingplusplus.android.PaymentActivity"
            android:configChanges="orientation|screenSize"
            android:launchMode="singleTop"
            android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />

        <!-- 支付宝 -->
        <activity
            android:name="com.alipay.sdk.app.H5PayActivity"
            android:configChanges="orientation|keyboardHidden|navigation"
            android:exported="false"
            android:screenOrientation="portrait" />
        <activity
            android:name="com.alipay.sdk.auth.AuthActivity"
            android:configChanges="orientation|keyboardHidden|navigation"
            android:exported="false"
            android:screenOrientation="portrait" />

        <!-- 微信支付 -->
        <activity-alias
            android:name=".wxapi.WXPayEntryActivity"
            android:exported="true"
            android:targetActivity="com.pingplusplus.android.PaymentActivity" />


        <!-- QQ登录 -->
        <activity
            android:name="com.tencent.tauth.AuthActivity"
            android:noHistory="true"
            android:launchMode="singleTask" >
        </activity>

        <!-- TapTap登录 -->
        <activity
            android:name="com.taptap.sdk.TapTapActivity"
            android:exported="false"
            android:screenOrientation="portrait"
            android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
            android:theme="@android:style/Theme.NoTitleBar" />

        <activity
            android:name="com.tencent.connect.common.AssistActivity"
            android:theme="@android:style/Theme.Translucent.NoTitleBar"
            android:configChanges="orientation|keyboardHidden|screenSize" />
            
        <!-- XDLive -->
         <provider android:authorities="游戏包名+.com.squareup.picasso" android:exported="false" android:name="com.squareup.picasso.PicassoProvider"/>
    </application>
</manifest>
```


### 2.2.生成APK

<p>在Unity中生成APK，或将工程导出至Android Studio进行打包。</p>

<p style="color:red">当前版本QQ SDK （open_sdk_r6008_lite.jar）包含assets，当构建工具设置成internal时，这些文件不会被打包进apk中，会导致未安装QQ时不能扫码登录。为避免此类问题，建议将构建构建工具换成gradle或提取jar包含的assets文件，放置于android/assets</p>


<img src="img/2.png"></img>


### 2.3.接入微信分享

<p>心动SDK提供的分享功能已过期，即将停止维护，请尽量自行接入分享。</p>
<p style="color:red">微信分享的微信AppID必须使用心动提供的微信AppID，否则会导致微信登录失败</p>
<p>如果游戏需要自行接入微信分享，AndroidManifest需进行以下处理。</p>

接入第三方分享插件有两种常见的方式：

* 一般会被要求在包名目录下创建wxapi文件夹，新建一个名为WXEntryActivity的activity并继承或实现某个类或接口，请将这个类改名为WXEntryForXDActivity以免和心动登录功能冲突。
* 另一种是直接配置activity-alias，这种情况请与平台联系后再使用

```

单接分享SDK被要求的增加配置，注意其中name的修改
<activity
	android:name=".wxapi.WXEntryForXDActivity"
	android:theme="@android:style/Theme.Translucent.NoTitleBar"
	android:configChanges="keyboardHidden|orientation|screenSize"
	android:exported="true"
	android:screenOrientation="portrait"/>
	
```


## 3.iOS

用Unity导出Xcode工程并打开

### 3.1. 导入SDK文件

从心动平台处获取SDK资源文件，其中主要的文件或目录用途如下。

目录或文件 | 用途
--- | ---
resource | 心动SDK需要或依赖的资源文件，需要保证所有文件都被添加到了Xcode的“Copy Bundle Resources”中


将以上文件导入Xcode工程。

### 3.2. 添加系统依赖库

```
libz.tbd
libsqlite3.0.tbd
libicucore.tbd
*请核对下列库文件是否已自动添加*
Security.framework 
CFNetwork.framework
UIKit.framework
QuartzCore.framework
Foundation.framework
CoreGraphics.Framework
CoreTelephony.framework
SystemConfiguration.framework
libiconv.tbd
libc++.tbd
```

### 3.3. 设置 URL Types

需要在Xcode中设置多个URL Types，URL Types主要是需要设置URL Schemes，其它选项可任意填写。按照下面表格的内容填写，注意替换其中的各项AppID。

URL Schemes | 用途 |示例 |备注
---|---|---|---|
XD-{心动AppID}|用于支付宝支付后跳回|XD-ci2dos1ktzsca4f
{微信AppID}| 用于微信授权登录后跳回|wx19f231d77ac408d9
tencent{QQ AppID}|用于QQ授权登录后跳回|tencent317081|如果给到的心动AppID没有对应的QQ AppID，可以不配置该项
tt{TapTap AppID}|用户TapTap授权登录后跳回|tt123456

### 3.4. 配置 info.plist

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
</array>
<key>NSAppTransportSecurity</key>
<dict>
<key>NSAllowsArbitraryLoads</key>
<true/>
</dict>

```

### 3.5. 处理第三方应用跳回事件

<p style="color:red">
在UnityAppController.mm中增加如下两个方法，如果已经存在这些方法，在其中追加相应的处理代码即可。请务必添加下列代码，否则将影响第三方登录的授权回调。
</p>

```
#import <XdComPlatform/XDCore.h>
```

```
- (BOOL)application:(UIApplication*)application openURL:(NSURL*)url sourceApplication:(NSString*)sourceApplication annotation:(id)annotation{
	
	...
	...
    ...
   return [XDCore HandleXDOpenURL:url];
}

- (BOOL)application:(UIApplication *)app openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options{
    
    return [XDCore HandleXDOpenURL:url];
}
```

### 3.6. Buid Settings

Enable Bitcode = NO

##### 完成以上配置即可进行编译打包。

## 4. 广告部分说明
XDSDK内部集成了部分主要渠道广告SDK，包括今日头条巨量广告平台SDK，和腾讯广点通SDK。必要事件（如注册）会在SDK内部发送，充值事件由XDSDK服务端发送事件到相应平台。游戏不用做额外对接工作。

需要接入相应平台的SDK请联系XDSDK后端配置广告参数。

### 4.1	iOS
今日头条：TTTracker.framework，版本2.0.6

广点通：GDTActionSDK.framework，版本1.4.9

游戏打包时加入对应的SDK即可。

注意：

1.广点通SDK在添加到Link Binary With Libraries之后，还必须添加到Embedded Contend中。

2.build setting 中Other Link Flag 中添加-ObjC。


### 4.2	Android
今日头条：版本2.0.6

广点通：版本1.4.9

需要使用广告包时，将XDAdAction.aar加入工程。

若需要出多个渠道包，由市场联系XDSDK，提供所需文件。

SDK提供接口，获取当前包的渠道名。（单接TapDB时可以使用改接口获取渠道）

```
//获取当前包的渠道名（安卓）
		public static string GetAdChannelName()

```




## 5. 服务端对接

### 5.1	获取用户信息
游戏服务端使用客户端获取的access token，按照下面的方式获取用户信息。

```
接口：https://api.xd.com/v1/user
method：GET
参数：access_token
请求示例：https://api.xd.com/v1/user?access_token=1234
成功判断：返回的HTTP Code为200时表示成功，否则失败
返回数据格式：application/json
返回值示例：
{"id":"1""name":"xdname","friendly_name":"xdfriendly_name","client_id":"abc","phone":"1","safety":false,"site":"1"}
id：用户的ID，注意类型是字符串
name：用户的账号名称
friendly_name：用户的昵称，如果游戏想要展现用户名称，建议使用该字段
client_id：该用户在该游戏登录时使用的心动AppID
phone： 绑定的手机号码
safety： 账号是否安全/通过设备二次验证（true：安全，false：不安全）
site：账号类型, 0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串
authoriz_state：0/1/2/3/4（实名状态,0未实名，>0 都表示已实名认证）
```
应用场景 | 参数以及使用方法
--- | ---
判断是否游客账号 | 游客账号的name和id相同
判断是否通过二次验证 | safety（0未实名，>0 都表示已实名认证）
判断账号类型 | site（0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串）
判断是否实名认证 | authoriz_state（0未实名，>0 都表示已实名认证）

### 5.2.	处理支付回调

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
</br>
1、游戏服务端应该按照order_id进行排重，相同order_id仅生效一次。
</br>
2、游戏服务端成功处理了支付回调后，应当返回字符串“success”，如果是一笔已经处理的重复的订单，也应该返回“success”。
</br>
3、只要通过签名校验的回调，都应该视为合法数据，按照如下逻辑发放道具。A.如果payment字段为appstore，即AppStore支付，直接按照product_id字段进行道具发放；B.如果payment字段为其它值，需要验证gold字段和 product_id 字段是否相符，如果相符，按照product_id发放道具，如果不相符，直接按照gold字段折算成对应的游戏货币发放。
</p>
