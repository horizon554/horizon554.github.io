## <center> 心动SDK（Android）对接文档 </center>

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
	* [4.2添加Android支持库](#42添加android支持库)
	* [4.3添加需要的权限](#43添加需要的权限)
	* [4.4声明相关的Activity及文件配置](#44声明相关的activity及文件配置)
	* [4.5接收返回值](#45接收返回值)
	* [4.6接入微信分享处理](#46接入微信分享处理)
	* [4.7AndroidP兼容处理](#47AndroidP兼容处理)
* [5.接口调用](#5接口调用)
	* [5.1配置SDK登录选项](#51配置sdk登录选项)
	* [5.2设置回调](#52设置回调)
	* [5.3初始化SDK](#53初始化sdk)
	* [5.4登录](#54登录)
	* [5.5获取Access Token](#55获取access-token)
	* [5.6获取当前登录状态](#56获取当前登录状态)
	* [5.7打开用户中心](#57打开用户中心)
	* [5.8发起支付](#58发起支付)
	* [5.9登出](#59登出)
	* [5.10游客升级](#510游客升级)
	* [5.11退出](#511退出)
	* [5.12微信分享](#512微信分享)
	* [5.13实名认证](#513实名认证)
	* [5.14游客绑定](#514游客绑定)
	* [5.15客服](#515客服)
   	* [5.16手机绑定](#516手机绑定)
* [6服务端对接](#6服务端对接)
	* [6.1获取用户信息](#61获取用户信息)
	* [6.2处理支付回调](#62处理支付回调)
	
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

<image src="https://static.tapdb.net/web/res/img/upload/2017/07/27/01.png"></image>

<span id="2申请心动appid">

### 2.申请心动AppID

<p>参阅“心动AppID申请介绍”文档，申请心动AppID，获得心动AppID、心动AppKey、微信AppID、QQ AppID、Ping++ ID。其中心动AppID主要是客户端对接时使用，AppKey主要是服务端对接支付回调时使用。</p>

<p style="color:red">注意，如果游戏需要自行接入微信分享功能，必须使用心动提供的微信AppID，否则会导致微信登录失败。
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

#### 4.1.获取SDK

<p>从心动平台处获取SDK，其中SDKLib目录就是心动SDK项目，可以直接导入eclipse中作为Library项目。如果不是使用eclipse作为IDE的项目，需要保证相关的文件都被正确导入到项目中。SDKLib中的主要文件或目录用途如下。</p>

目录 | 用途
--- |---
libs | 包含心动SDK的库和其它依赖库
res | 包含心动SDK需要的资源文件

<span id="42添加android支持库">

#### 4.2.添加Android支持库

<p>添加Android v4支持库android-support-v4.jar到项目中。</p>

<span id="43添加需要的权限">

#### 4.3.添加需要的权限

```
    <uses-permission android:name="android.permission.INTERNET" />
    <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />
```

<span id="44声明相关的activity及文件配置">

#### 4.4.声明相关的Activity及文件配置

```diff
<application>
    <activity
        android:name="com.xd.sdklib.helper.XDStartView"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" 
        android:configChanges="orientation|keyboardHidden|screenSize" />
    <activity
        android:name="com.xd.sdklib.helper.XDPayActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
        android:configChanges="orientation|keyboardHidden|screenSize"  />
    <activity
        android:name="com.xd.sdklib.helper.XDViewActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen"
        android:configChanges="orientation|keyboardHidden|screenSize" />
    <activity
        android:name="com.xd.sdklib.helper.XDWebView"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
    <activity
        android:name="com.xd.sdklib.helper.WXEntryActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />

    <activity-alias
        android:name=".wxapi.WXEntryActivity"
        android:exported="true"
        android:targetActivity="com.xd.sdklib.helper.WXEntryActivity"/>

    <!-- Ping++ SDK -->
    <activity
        android:name="com.pingplusplus.android.PaymentActivity"
        android:configChanges="orientation|screenSize"
        android:launchMode="singleTop"
        android:theme="@android:style/Theme.Translucent.NoTitleBar.Fullscreen" />
        
    <!-- TapTap登录 -->
    <activity
        android:name="com.taptap.sdk.TapTapActivity"
        android:exported="false"
        android:screenOrientation="portrait"
        android:configChanges="keyboard|keyboardHidden|screenLayout|screenSize|orientation"
        android:theme="@android:style/Theme.NoTitleBar" />

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
        android:launchMode="singleTask" />
    <activity
        android:name="com.tencent.connect.common.AssistActivity"
        android:theme="@android:style/Theme.Translucent.NoTitleBar"
        android:configChanges="orientation|keyboardHidden|screenSize" />
        
    <!-- 文件配置 -->    
    <provider 
		android:authorities="项目包名.com.squareup.picasso" 
		android:exported="false" 
		android:name="com.squareup.picasso.PicassoProvider"/>
</application>


```

<span id="45接收返回值">

#### 4.5.接收返回值

在初始化XDSDK的Activity中，增加如下处理。

```
@Override
protected void onActivityResult(int requestCode, int resultCode, Intent data) {
    XDSDK.onActivityResultData(requestCode, resultCode, data);
    super.onActivityResult(requestCode, resultCode, data);
}
```

<span id="46接入微信分享处理">

#### 4.6.接入微信分享的处理

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

<span id="47AndroidP兼容处理">

#### 4.7.AndroidP兼容处理

如果游戏打包后无法在AndroidP的机型上使用

1. 将[org.apache.http.legacy.jar](../org.apache.http.legacy.jar)打包到游戏内
2. AndroidManifest的Application标签下添加如下内容

```
<uses-library android:name="org.apache.http.legacy" android:required="false"/>
```


<span id="5接口调用">

### 5.接口调用

<p>所有接口设计为静态方法，在com.xd.xdsdk.XDSDK中调用。</p>

<span id="51配置sdk登录选项">

#### 5.1.配置SDK登录选项

<p>心动SDK提供配置QQ、微信登录、游客登录的显示与隐藏以及登录方式。</p>

<p>如不进行配置，SDK将默认显示QQ、微信、游客登录。QQ和微信的登录方式默认为App授权登录，心动SDK会根据QQ和微信的安装情况，将QQ和微信登录方式切换为Web登录，或者不提供对应的登录功能。</p>

<p style="color:red">请勿直接复制以下代码，根据游戏实际需求选择调用以下API</p>

```
XDSDK.hideGuest()	//隐藏游客登录
XDSDK.hideWX()		//隐藏微信登录
XDSDK.hideQQ()		//隐藏QQ登录
XDSDK.showVC()		//显示VeryCD登录（此接口供老游戏兼容，新游戏不建议调用）
XDSDK.setQQWeb()	//设置QQ为Web登录方式
XDSDK.setWXWeb()	//设置微信为Web 扫码登录方式
XDSDK.hideTapTap()	//隐藏TapTap登录，使用心动登录
```

<p style="color:red">SDK版本3.2.8添加了新接口，自定义登录按钮及顺序。可以在SDK初始化之前调用。具体说明如下：</p>


 自定义登录入口。共五种，其中主要两种，次要两种。
 

1、默认显示为：微信、TapTap、游客、QQ
 
2、各登录方式对应名称如下：
 
-  微信登录：WX_LOGIN，
-  taptap登录：TAPTAP_LOGIN，
-  QQ登录：QQ_LOGIN，
-  游客登录：GUEST_LOGIN，
-  心动登录：XD_LOGIN
 
3、例，传入的数组。
	new String[]{"WX_LOGIN", "TAPTAP_LOGIN", "GUEST_LOGIN","QQ_LOGIN"}
	
注：

- 最多只能显示4种登录方式。
- 四个登录按钮TapTap和心动登录不能同时显示

```
// 自定义登录按钮及顺序
XDSDK.setLoginEntries(new String[]{"WX_LOGIN", "TAPTAP_LOGIN", "GUEST_LOGIN","QQ_LOGIN"});
```

<span id="52设置回调">

#### 5.2.设置回调

<p>游戏调用心动SDK的接口后，大部分情况都是通过回调的形式将结果返回给游戏，所以需要先设置对应的回调函数。</p>

代码示例：

```
XDSDK.setCallback(new XDCallback() {
            //初始化成功
            @Override
            public void onInitSucceed() {

            }
            //初始化失败
            @Override
            public void onInitFailed(String msg) {

            }
            //登录成功
            @Override
            public void onLoginSucceed(String token) {
                
            }

            //登录失败
            @Override
            public void onLoginFailed(String msg) {
				
            }

            //登录取消
            @Override
            public void onLoginCanceled() {

            }

            //游客绑定成功
            @Override
            public void onGuestBindSucceed(String token) {

            }
            //登出成功
            @Override
            public void onLogoutSucceed() {

            }
            //支付完成
            @Override
            public void onPayCompleted() {

            }
            //支付失败
            @Override
            public void onPayFailed(String msg) {

            }
            //支付取消
            @Override
            public void onPayCanceled() {

            }
            
            //实名成功
            @Override
            public void onRealNameSucceed() {

            }

			  //实名失败
            @Override
            public void onRealNameFailed(String msg) {

            }
        });
```

<span id="53初始化sdk">

#### 5.3.初始化SDK

初始化心动SDK，调用该接口是调用其它功能接口的必要条件。

```
/**
 * @param activity 游戏的主activity
 * @param appid 心动AppID
 * @param aOrientation 屏幕方向，0表示横屏，1表示竖屏
 * @param channel 渠道号
 * @param version 版本号
 * @param enableTapdb 是否开启内置TapDB统计功能，true表示开启，false表示不开启
 */
public static void initSDK(Activity activity, String appid, int aOrientation, String channel, String version, boolean enableTapdb) 
```

示例代码
```
XDSDK.initSDK(this, "xxxxxxxxxxxxxx", 0, "channel", "version", false);
```
<p>调用该接口会触发下列回调。</p>
<p style="color:red">其他接口请在获取到初始化成功回调之后进行调用。</p>

类别 | 回调方法
--- |---
初始化成功 | public void onInitSucceed()
初始化失败 | public void onInitFailed(String msg)

<p style="color:red">注意：</p>
<p style="color:red">已经单独接入TapDB的项目请勿开启内置TapDB统计功能</p>
<p style="color:red">其他注意事项请参考Unity文档TapDB部分或与平台联系</p>

<span id="54登录">

#### 5.4.登录

调用该接口进行登录。
客户端授权登录需要包名和签名与申请时的信息保持一致。

```
public static void login()
```

示例代码
```
XDSDK.login();
```

<p>调用该接口会触发下列回调。</p>
<p style="color:red">获取、查看用户信息以及支付接口请在获取到登录成功回调之后调用。</p>

类别 | 回调方法
--- | ---
登录成功 | public void onLoginSucceed(String token)
登录失败 | public void onLoginFailed(String msg)
登录取消 | public void onLoginCanceled()

<span id="55获取access-token">

#### 5.5.获取Access Token

调用该接口获取当前登录用户的access token。

```
public static String getAccessToken()
```

代码示例
```
XDSDK.getAccessToken()
```

<span id="56获取当前登录状态">

#### 5.6.获取当前登录状态

调用该接口获取当前登录状态。

```
public boolean isLoggedIn()
```
代码示例
```
XDSDK.isLoggedIn()
```

<span id="57打开用户中心">

#### 5.7.打开用户中心

调用该接口打开用户中心界面，用户可以在该界面进行登出和登录操作，游戏注意正确处理回调。在未登录状态，无法打开用户中心。在用户中心中，用户可进行登出操作，此时交互界面将消失。游戏需要提供引导用户重新进行登录的操作界面。

```
/**
* @return false表示尚未登录，重复调用默认为成功
*/
public static boolean openUserCenter()
```
代码示例
```
XDSDK.openUserCenter()
```

<span id="58发起支付">

#### 5.8.发起支付
调用该接口发起支付。
<p style='color:red'>不保证在任何情况下都能收到回调，请勿直接使用SDK返回的支付结果作为最终判定订单状态的依据。</p>

```
/**
* @param info 支付相关信息，注意key和value都是字符串类型
*/
public static boolean pay(Map<String, String> info) 
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
EXT | 否 |额外信息，最长512个字符，服务端支付回调会包含该字段。可用于标记区分充值回调地址，如需使用该功能，请联系平台进行配置。代码示例：info.put("EXT", "{\"payCallbackCode\":2}");

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
支付完成 | public void onPayCompleted()
支付失败 | public void onPayFailed(String msg) 
支付取消 | public void onPayCanceled()

示例代码

```
Map<String, String> info = new HashMap<String, String>();
info.put("OrderId", "1234567890123456789012345678901234567890");
info.put("Product_Price", "1");
info.put("EXT", "abcd|efgh|1234|5678");
info.put("Sid", "2");
info.put("Role_Id", "3");
info.put("Product_Id", "4");
info.put("Product_Name", "648大礼包");
XDSDK.pay(info);
```

<span id="59登出">

#### 5.9.登出
需要注销当前登录用户时调用，该操作不会出现登录界面。

```
public static void logout() 
```
调用该接口会触发下列回调

类别 | 回调方法
--- | ---
登出成功 | public void onLogoutSucceed() 

示例代码
```
XDSDK.logout();
```

<span id="510游客升级">

#### 5.10.游客升级

当游客账号升级成功时,会触发下列回调。<br/>
后续如需使用token，务必使用回调给的新token。但已生效的会话无需处理。

类别 | 回调方法
--- | ---
游客升级成功 | public void onGuestBindSucceed(String token)

<span id="511退出">

#### 5.11.退出

调用该方法时，弹出确认框供用户选择是否退出。

```
public static void exit(ExitCallback callback)
```

示例代码

```
XDSDK.exit(new ExitCallback() {
    @Override
    public void onConfirm() {
    	super.onConfirm();
    }

    @Override
    public void onCancle() {
    	super.onCancle();
    }
});
```

<span id="512微信分享">

#### 5.12.微信分享 （此方法已废弃，即将不再提供支持，请自行接入分享SDK）


调用心动SDK微信分享功能后，通过该回调通知分享结果。

示例代码 

```
XDWXShare.setWXShareCallBack(new XDWXShare.XDWXShareCallback() {
    @Override
    public void onWXShareSucceed() {

    }
    @Override
    public void onWXShareFailed(String msg) {

    }
});
```



分享或收藏的目标场景，通过调用setScene()设置scene场景值实现。

场景值 | 目标场景
--- | ---
XDWXShareObject.SCENE_SESSION | 发送到聊天界面
XDWXShareObject.SCENE_TIMELINE | 发送到朋友圈
XDWXShareObject.SCENE_FAVOURITE | 添加到微信收藏

调用setType()设置分享类型。

类型值 | 分享类型
--- | ---
XDWXShareObject.TYPE_TEXT | 文字分享
XDWXShareObject.TYPE_IMAGE | 图片分享
XDWXShareObject.TYPE_MUSIC | 音乐分享
XDWXShareObject.TYPE_VIDEO | 视频分享
XDWXShareObject.TYPE_WEB | 网页分享



示例代码

```
//分享文字
XDWXShareObject wxShareContent = new XDWXShareObject();
wxShareContent.setTitle("文字标题");
wxShareContent.setText("文字内容");
wxShareContent.setDescription("文字描述");
wxShareContent.setScene(XDWXShareObject.SCENE_TIMELINE); //设置目标场景
wxShareContent.setType(XDWXShareObject.TYPE_TEXT);
XDWXShare.share(wxShareContent);

//分享图片 (支持传入本地路径和Bitmap)
XDWXShareObject wxShareContent = new XDWXShareObject();
wxShareContent.setTitle("图片标题");
wxShareContent.setDescription("图片描述");
wxShareContent.setImage(path + "/1.png");  //需要分享的图片，可传入Bitmap或本地路径
wxShareContent.setThumb(path + "/2.png"); //预览图，可传入Bitmap或本地路径
wxShareContent.setScene(XDWXShareObject.SCENE_TIMELINE); //设置目标场景
wxShareContent.setType(XDWXShareObject.TYPE_IMAGE);
XDWXShare.share(wxShareContent);

//分享音乐
XDWXShareObject wxShareContent = new XDWXShareObject();
wxShareContent.setTitle("音乐标题");
wxShareContent.setDescription("音乐描述");
wxShareContent.setMusicUrl("音乐url");
wxShareContent.setThumb(path + "/2.png"); //预览图，可传入Bitmap或本地路径
wxShareContent.setScene(XDWXShareObject.SCENE_TIMELINE); //设置目标场景
wxShareContent.setType(XDWXShareObject.TYPE_MUSIC);
XDWXShare.share(wxShareContent);

//分享视频
XDWXShareObject wxShareContent = new XDWXShareObject();
wxShareContent.setTitle("视频标题");
wxShareContent.setDescription("视频描述");
wxShareContent.setVideoUrl("视频url");
wxShareContent.setThumb(path + "/2.png"); //预览图，可传入Bitmap或本地路径
wxShareContent.setScene(XDWXShareObject.SCENE_TIMELINE); //设置目标场景
wxShareContent.setType(XDWXShareObject.TYPE_VIDEO);
XDWXShare.share(wxShareContent);

//分享网页
XDWXShareObject wxShareContent = new XDWXShareObject();
wxShareContent.setTitle("网页标题");
wxShareContent.setDescription("网页描述");
wxShareContent.setWebPageUrl("网页url");
wxShareContent.setThumb(path + "/2.png");//预览图，可传入Bitmap或本地路径
wxShareContent.setScene(XDWXShareObject.SCENE_SESSION); //设置目标场景
wxShareContent.setType(XDWXShareObject.TYPE_WEB);
XDWXShare.share(wxShareContent);
```

<span id="513实名认证">

#### 5.13.实名认证

在用户登录成功状态下，调用该接口打开实名认证窗口。

```
/*实名认证*/
public static void openRealName() 

```

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
认证成功 | public void onRealNameSucceed();
认证失败 | public void onRealNameFailed(string error_msg);

<p style = "color:red">
注意: 用户的实名认证状态以服务端接口（6.1）authoriz_state参数为准。
</p>

<span id="514游客绑定">

#### 5.14.游客绑定
在用户登录成功状态下，调用该接口打开游客绑定。

```
public static void openUserBindView() 
```

调用该接口会触发下列回调。

类别 | 回调方法
--- | ---
成功 | public void onGuestBindSucceed(String token);
失败 | public void onGuestBindFailed(string msg);

<span id="515客服">

#### 5.15.客服
在用户登录成功状态下，调用该接口打开客服。

```
public static void userFeedback() 
```

<span id="516手机绑定">

#### 5.16.手机绑定

在用户登录成功状态下，调用该接口打开手机绑定窗口。

```
/*手机绑定*/
public static void openMobileVerifyView() 

```


<span id="6服务端对接">

### 6.服务端对接

<span id="61获取用户信息">

#### 6.1.获取用户信息
游戏服务端使用客户端获取的access token，按照下面的方式获取用户信息。

``` diff
接口：https://api.xd.com/v1/user
method：GET
参数：access_token
请求示例：https://api.xd.com/v1/user?access_token=1234
成功判断：返回的HTTP Code为200时表示成功，否则失败
返回数据格式：application/json
返回值示例：
{"id":"1""name":"xdname","friendly_name":"xdfriendly_name","client_id":"abc","phone":"1","safety":false,"site":"1"}
id：用户的ID
- 注意类型是字符串
name：用户的账号名称
friendly_name：用户的昵称，如果游戏想要展现用户名称，建议使用该字段
client_id：该用户在该游戏登录时使用的心动AppID
phone： 绑定的手机号码
safety： 账号是否安全/通过设备二次验证（true：安全，false：不安全）
site：账号类型, 0 => vc账号，1 => 心动账号，3 => qq账号，8 => 微信账号，9 => TapTap账号，注意类型是字符串
fcm：0/1（0：无需防沉迷，1：需要防沉迷）
authoriz_state：0/1/2/3/4（实名状态,0未实名，>0 都表示已实名认证）
``` 

<span id="62处理支付回调"> 

#### 6.2.处理支付回调
游戏服务端需要提供一个能够处理支付回调的接口，这个接口是申请心动AppID时需要的。处理逻辑中，需要使用一个密钥进行加密验证，该密钥即为心动AppKey。
当心动平台处有充值成功时，心动服务端会通知到支付回调接口，信息如下。

```
method：POST
数据格式：application/x-www-form-urlencoded

```
字段如下。


字段 | 类型 | 描述
--- | --- | ---
order_id | number | 心动平台的订单号，相同订单号表示是同一笔支付
payment | string | 支付方式，appstore或其它（若回调无该字段，则默认为appstore）
user_id | string | 充值用户ID <font style="color:red">注意类型是字符串</font>
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
</p>
<p style="color:red">游戏服务端应该按照order_id进行排重，相同order_id仅生效一次<p>
<p style="color:red">游戏服务端成功处理了支付回调后，应当返回字符串“success”，如果是一笔已经处理的重复的订单，也应该返回“success”。</p>
<p style="color:red">只要通过签名校验的回调，都应该视为合法数据，按照如下逻辑发放道具。A.如果payment字段为appstore，即AppStore支付，直接按照product_id字段进行道具发放；B.如果payment字段为其它值，需要验证gold字段和 product_id 字段是否相符，如果相符，按照product_id发放道具，如果不相符，直接按照gold字段折算成对应的游戏货币发放。</p>





