# 注册登录

## 获取相关登陆、短信获取、用户注册协议、忘记密码等服务的url

/wechat/register_ajax

输入
```
无
```
输出
```
{code:200,
 msg:"success",
 data：{
    login_url:"",             //登陆url
    captcha_url:"",           //短信获取url
    user_agreement_url:"",    //用户协议url
    forget_pwd_url:""        //忘记密码url
 }
    
}
```  
    


## 用户登出
/wechat/logout_ajax
输入
```
```
    
输出
```
{code:200,
 msg:"success",
 data：{}
}
``` 

## 用户登陆
/wechat/login_ajax
输入
```
mobile			用户手机号码
password		登陆密码
auto_login      自动登陆标志
```

输出
```
code
msg
data
    userId
    status
    password
    mobile
    mail
    enterpriseName
    enterpriseAddress
    phoneNum
    identity
    type
    name
    enterpriseVerifyStatus
    description
    countryId
    countryName
    provinceId
    cityId
    cityName
    districtId
    districtName
    provinceName
    QQ
    openid
```    

## 用户注册
/wechat/register_account_ajax
输入
```  
mobile				注册手机号
password			登陆密码
mobileCaptcha	短信验证码
qq						注册qq
email					注册email
openid              微信openid
```  
输出
```  
code
msg
data
    register_enterprise_url      会员认证url
    userId 用户id
    mobile  手机号码
    email  邮箱
    qq      QQ号码
```  
    
## 用户微信绑定
/wechat/register/bindwx_ajax
输入
```  
userid			用户id
opendid			微信openid
```  

输出
```  
code
msg
data
根据code判断绑定结果  
```  

## 用户认证跳转请求
/register/enterprise_ajax
输入
```  
```  


输出
```  
code
msg
data
    register_enterprise_url    认证的url跳转请求
    meta_country                城市信息
    type                        默认的认证方式(2:企业)
    enterpriseInfo              认证信息(未认证时为null)
```      
    
    
## 忘记密码请求
/wechat/password/find
输入
``` 
``` 

输出
``` 
code
msg
data
    captcha_url    图形验证码url
``` 

## 验证手机号码是否注册并发送注册短信验证码
ajax_url:/wechat/check_mobile_sendsms_ajax

```
输入:
    mobile      手机号码
    type        1：注册短信
```
输出
```
code
msg
data
```


## 找回密码——检测手机号是否注册

ajax url:/wechat/is_mobile_registered_ajax

请求

```
    POST
    {
        mobile:"13612345678"
    }
```

结果

```
    {
        code:200,
        msg:"success",
        data:
    }
```

    
    

## 找回密码验证短信验证码    
/wechat/check_mobile_captcha_ajax
 
输入
```
    mobile          手机号
    mobileCaptcha   手机短信验证码
```

输出
```
code
msg
data
    certificate    验证结果
```

## 密码重置请求
/wechat/reset_password_ajax

输入
```
    password          新密码
    certificate   手机短信验证结果
```   

输出
```
code
msg
data
    mobile    重置成功则返回手机号码
    username  用户姓名
```
    