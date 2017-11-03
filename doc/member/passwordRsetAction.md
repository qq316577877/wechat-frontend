# 忘记密码）


## 忘记密码服务  短信验证码

ajax url:/wechat/password/mobile_sendsms_ajax

请求

```
    POST
    {
        mobile:18627098565      手机号码
        type:2              短信类型
    }
```

结果

```
    {
        code:200,
        msg:"success",
        data:{
        }
    }
```

## 忘记密码服务  验证短信

ajax url:/wechat/password/check_mobile_captcha_ajax

请求

```
    POST
    {
        mobile:"18627098565"   ,   //手机号码
        mobileCaptcha:123123           //短信验证码
    }
```

结果

```
    {
        code:200,
        msg:"success",
        data:{
        certificate:"askdf132018fasd"   //修改密码的凭证
        }
    }
```

## 忘记密码服务  重置密码

ajax url:/wechat/password/reset_password_ajax

请求

```
    POST
    {
        password:"123456" ,     //新密码
        certificate:"fda1324fsdf123"           //修改密码凭证
    }
```

结果

```
    {
        code:200,
        msg:"success",
        data:{
        mobile:"18627098565",   //修改密码的凭证
        username:"张三"  //用户姓名
        }
    }
```
