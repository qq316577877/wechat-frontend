# 账户信息与安全（会员信息页面）


## 会员信息——查询会员信息

ajax url:/wechat/user/info/get_user_information_ajax

请求

```
    POST
    {
    }
```

结果

```
    {
        code:200,
        msg:"success",
        data:{
            mobile:"13612345678",
            type:1, // 1.个人; 2.企业
            enterpriseName:"企业名称",//企业名称
            name:"姓名",
            identity:"42028119990101",
            mail:"111@qq.com",//邮箱
            phoneNum:"15888888888",//联系电话，可能为座机
            qq:"2222222",//qq,
            enterpriseVerifyStatus:1//企业认证状态，0.未认证  1.已认证  2.认证审核中  3.认证未通过
        }
    }
```


## 当前手机号验证(修改手机号)

ajax url:/wechat/user/info/check_current_mobile_ajax

请求

```
	POST
	{
		captcha:"123456" // 短信验证码
	}
```

结果

```
    {
        code:200,
        msg:"success",
        data: {
            certificate:"this is the certificate" // 旧手机验证通过的证书
        }
    }
```			



## 提交新手机号

ajax url:/wechat/user/info/new_mobile_ajax

请求

```
	POST
	{
        mobile:"13687654321", // 新的手机号码
        certificate:"this is the certificate", // 旧手机验证通过的证书
		captcha:"654321" // 短信验证码
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



## 绑定邮箱

ajax url:/wechat/user/info/binding_mail_ajax

请求

```
	POST
	{
        mail:"admin@ovfintech.com" // 邮箱账号
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



## 修改密码

ajax url:/wechat/user/info/modify_pwd_ajax

请求

```
	POST
	{
        oldPassword:"123456",
        newPassword:"654321"
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



## 修改QQ

ajax url:/wechat/user/info/modify_qq_ajax

请求

```
	POST
	{
        qq:"123456" // 必须是大于10000的数字
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


## 修改联系电话

ajax url:/wechat/user/info/modify_phonenum_ajax

请求

```
	POST
	{
        phoneNum:"15888888888"//联系电话，可能为座机
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