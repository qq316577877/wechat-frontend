# 会员认证



## 会员认证短信发送
ajax_url:/wechat/captcha/send_sms_direct_ajax

输入
```
mobile    手机号码
tyep        4  实名认证
```

输出
```
code
msg
data
```


## 查询当前用户的认证状态
ajax_url:/wechat/enterprise/auth/auth_status_ajax


输入
```
(需登陆)
```
输出
```
code
msg
data
    status          状态
    statusDesc      状态描述
    
```

## 检查当前用户的认证状态
ajax_url:/wechat/enterprise/auth/enterprise_auth_info_ajax


输入
```
(需登陆)
```
输出
```
code
msg
data
    status          状态
    statusDesc      状态描述
    countryName     国家名称
    provinceName    省份名称
    cityName        城市名称
    areaName        区域名称
    enterpriseInfo
        id                      数据ID
        userId                  用户ID
        type                    认证类型  1个人 2 企业
        enterpriseName          企业名称
        name                    用户名称
        phoneNum                联系电话
        identity                用户身份证号码
        address                 详细地址
        countryId               国家ID
        provinceId              省份ID
        cityId                  市ID
        districtId              行政区Id
        status                  企业认证状态，0.认证已删除  1.已认证  2.未认证  3.认证审核中  4.认证未通过
        licence                 营业执照图片(微信端没有)
        credential              营业执照号
        identityFront           身份证正面图片地址  
        identityBack            身份证反面图片地址
        attachmentOne           附件1图片地址(微信端无)
        attachmentTwo           附件2图片地址(微信端无)
        rejectNote              审核被驳回的原因
        description             描述
        memberIdentification    新老客户标识：1.老客户 2新客户
        lastEditor              最后更新用户
    
    authInfo
        id                      数据ID
        userId                  用户ID
        username                用户姓名
        identity                用户身份证号码
        mobile                  用户手机号码
        customerId              合同服务用户Id
        bankId                  开卡银行(暂未识别)
        bankName                银行类型名称(暂未识别)
        bankCard                银行卡号
        status                  状态，0.已删除，1.已通过，2.未通过
        rejectNote              认证不通过的原因
        type                     认证类型 1个人 2企业
    (若数据为空，则表示用户从未认证过)
```

```
状态说明
20、实名未认证  会员未认证
30、实名未认证	 会员认证中
10、实名未认证  会员已经认证
40、实名未认证  会员认证不通过
21、实名已认证  会员未认证
31、实名已认证  会员认证中
11、实名已认证  会员已认证
41、实名已认证  会员认证不通过
22、实名认证失败  会员未认证
32、实名认证失败  会员认证中
12、实名认证失败  会员已认证
42、实名认证失败  会员认证不通过
```


## 会员认证第一步实名认证
ajax_url::/wechat/enterprise/auth/check_auth_first_ajax


输入
```
type            认证类型 1个人 2企业
username        会员姓名
identity        会员身份证号码
bankCard        会员银行卡号
mobile          会员银行卡预留手机号
captcha         短信验证码
```

输出
```
code
msg
data
    info 
        id              数据ID
        userId          用户ID
        username        会员姓名
        identity        会员身份证号码
        mobile          会员手机号码
        customerId      贷款合同服务ID(开通贷款服务后)
        bankId          开卡银行类型ID
        bankName        银行类型名称
        bankCard        银行卡号
        status          实名认证状态
        rejectNote      认证失败原因
        addTime         添加时间
        updateTime      更新时间
```


## 会员认证提交 个人
ajax_url:/wechat/enterprise/auth/personal_auth_ajax


输入
```
countryId           国家ID
provinceId          省份ID
cityId              城市ID
districtId          区域ID
address             详细地址
phoneNum            联系电话
identityFront       身份证正面
identityBack        身份证反面
```
输出
```
code
msg
data
```

## 会员认证提交 企业
ajax_url:/wechat/enterprise/auth/enterprise_auth_ajax

输入
```
enterpriseName          企业名称
credential              证照号
countryId           国家ID
provinceId          省份ID
cityId              城市ID
districtId          区域ID
address             详细地址
phoneNum            联系电话
identityFront       身份证正面
identityBack        身份证反面
```

输出
```
code
msg
data
```




