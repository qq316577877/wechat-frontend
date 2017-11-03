# 贷款申请

## 查询用户实名认证信息
ajax_url:/wechat/loan/auth/get_loan_user_auth_information_ajax


输入
```
(需登陆)
```

输出
```
code
msg
data
    id              数据ID
    userId          用户ID
    username        用户姓名
    Identity        用户身份证号码    
    mobile          手机号码
    customerId      合同服务用户ID
    bankId          开卡银行类型ID
    bankName        银行类型名称
    bankCard        银行卡号
    status          实名认证状态
    statusDesc      状态描述
    rejectNote      认证不通过原因
```
    
## 查询用户申请贷款的信息
ajax_url:/wechat/loan/auth/get_loan_user_apply_credit_information_ajax


输入
```
(需登陆)
```

输出
```
code
msg
data
    id                  申请记录ID
    type                申请类型(个人1  企业2)
    typeDesc            中文描述
    userId              用户ID
    enterpriseName      企业名称
    credential          证照号
    username            申请人姓名
    identity            申请人身份证号码
    mobile              手机号码
    maritalStatus       婚姻状态
    maritalStatusDesc   婚姻状态描述
    partnerName         配偶姓名
    partnerIdentity     配偶身份证号码
    countryId           国家ID
    countryName         国家名称
    provinceId          省份ID
    provinceName        省份名称
    cityId              城市ID
    cityName            城市名称
    districtId          行政区ID
    districtName        行政区名称
    address             详细地址
    status              申请状态
    statusDesc          状态描述
    rejectNote          认证不通过的原因
```
 
## 查询贷款额度
ajax_url:/wechat/loan/auth/get_loan_user_credit_information_ajax


输入
```
(需登陆)
```

输出
```
code
msg
data
    stepFlag           跳转步骤 1-印章/签名上传步骤  2-合同签订步骤
    loanUserCreditInfo
        id              数据记录ID
        userId          用户ID
        username        用户姓名
        identity        用户身份证号码
        mobile          手机号码
        creditLine      授信额度
        balance         可贷余额
        contractId      借款合同ID
        projectCode     项目编号
        contractUrl     借款合同URL
        type            授信类型(1个人 2企业)
        status          状态，0.已删除，1.已授信，2.申请中，3.被驳回，4.已冻结, 5.已授信(未激活)，6已激活(待确认)'
        ctrNo           合同号
        crCstNo         信贷客户代号
        rejectNote      审核失败原因
        description     描述
        expireTime      授信到期日
        ctrBankNo       贷款合同账号(存款账户)
        insureCtrNo     保证合同编号
```

## 申请贷款提交
ajax_url:/wechat/loan/auth/add_loan_user_credit_ajax


输入
```
username            申请人
identity            身份证号码
mobile              联系电话
maritalStatus       婚姻状态
partnerName         配偶姓名
partnerIdentity     配偶身份证号码
countryId           国家ID
provinceId          省份ID
cityId              城市ID
districtId          区域ID
address             详细地址

```

输出
```
code
msg
data
```


   
## 贷款申请列表 -放款前(包括放款)
ajax-url:/wechat/loan/info/get_loan_info_list_apply_ajax


输入
```
pageIndex       页面索引
pageSize        每个页面大小
keyword         搜索关键字
status          搜索的状态
```
输出
```
code
msg
data
    pageNo          页码
    pageSize        页面大小
    totalRecords    总记录数
    list            列表
        id                  记录ID
        userId              用户ID
        name                用户姓名
        orderNo             订单号
        orderStatus         订单状态
        orderStatusDesc     状态描述
        transactionNo       订单流水号
        containerNo         要展示的货柜编号
        payMethod           付款方式
        performanceRate     执行利率-年利率
        contractId          借据合同ID
        projectCode         项目编号
        contractUrl         借据合同url
        containerStatus     货柜状态
        containerStatusDesc  状态描述
        deliveryTime        发货时间
        preReceiveTime      预计到货时间
        productId           商品ID
        prodictName         商品名称
        availableLoan       可贷款金额
        appliyLoan          申请贷款金额       
        confirmLoan         平台审核贷款金额
        offerLoan           实际放款金额
        dbtNo               借据号
        dbtExpDt            借据到期日
        offerTime           放款时间
        expiresTime         到期强制还款时间
        repaymentAmount     还款金额
        repaymentInterest   还款利息
        repaymentTime       还款时间
        serviceFee          服务费
        status              状态，0.已删除，1.已还款，2.待审核，3.待放款，4.审核不通过，5.已放款，6.待还款，7.还款失败，200.保证金还款成功，300.保证金还款失败,999.待确认（流水号重复时使用）
        statusDesc          状态描述
```

## 贷款申请列表 -放款后(包括放款)
ajax-url:/wechat/loan/info/get_loan_info_list_service_ajax


输入
```
pageIndex       页面索引
pageSize        每个页面大小
keyword         搜索关键字
status          搜索的状态
```
输出
```
code
msg
data
   usedAmount           已用贷款额度
   loanListPage
        pageNo          页码
        pageSize        页面大小
        totalRecords    总记录数
        list            列表
            id                  记录ID
            userId              用户ID
            name                用户姓名
            orderNo             订单号
            orderStatus         订单状态
            orderStatusDesc     状态描述
            transactionNo       订单流水号
            containerNo         要展示的货柜编号
            payMethod           付款方式
            performanceRate     执行利率-年利率
            contractId          借据合同ID
            projectCode         项目编号
            contractUrl         借据合同url
            containerStatus     货柜状态
            containerStatusDesc  状态描述
            deliveryTime        发货时间
            preReceiveTime      预计到货时间
            productId           商品ID
            prodictName         商品名称
            availableLoan       可贷款金额
            appliyLoan          申请贷款金额       
            confirmLoan         平台审核贷款金额
            offerLoan           实际放款金额
            dbtNo               借据号
            dbtExpDt            借据到期日
            offerTime           放款时间
            expiresTime         到期强制还款时间
            repaymentAmount     还款金额
            repaymentInterest   还款利息
            repaymentTime       还款时间
            serviceFee          服务费
            status              状态，0.已删除，1.已还款，2.待审核，3.待放款，4.审核不通过，5.已放款，6.待还款，7.还款失败，200.保证金还款成功，300.保证金还款失败,999.待确认（流水号重复时使用）
            statusDesc          状态描述
```

## 贷款详情
ajax_url:/wechat/loan/info/get_loan_info_details_ajax


输入
```
id      贷款记录ID
(需登陆)
```
输出
```
code
msg
data
     id                  记录ID
        userId              用户ID
        name                用户姓名
        orderNo             订单号
        orderStatus         订单状态
        orderStatusDesc     状态描述
        transactionNo       订单流水号
        containerNo         要展示的货柜编号
        payMethod           付款方式
        performanceRate     执行利率-年利率
        contractId          借据合同ID
        projectCode         项目编号
        contractUrl         借据合同url
        containerStatus     货柜状态
        containerStatusDesc  状态描述
        deliveryTime        发货时间
        preReceiveTime      预计到货时间
        productId           商品ID
        prodictName         商品名称
        availableLoan       可贷款金额
        appliyLoan          申请贷款金额       
        confirmLoan         平台审核贷款金额
        offerLoan           实际放款金额
        dbtNo               借据号
        dbtExpDt            借据到期日
        offerTime           放款时间
        expiresTime         到期强制还款时间
        repaymentAmount     还款金额
        repaymentInterest   还款利息
        repaymentTime       还款时间
        serviceFee          服务费
        status              状态，0.已删除，1.已还款，2.待审核，3.待放款，4.审核不通过，5.已放款，6.待还款，7.还款失败，200.保证金还款成功，300.保证金还款失败,999.待确认（流水号重复时使用）
        statusDesc          状态描述
```

## 查询我的资金服务年利率、月利率
ajax_url:/wechat/loan/info/get_loan_info_interest_rate_ajax


输入
```
```
输出
```
code
msg
data
    yearInterestRate     年利率
    monthInterestRate    月利率
```

## 开通安心签账户 并上传印章
ajax_url:/wechat/loan/contract/account_open_ajax


输入
```
sealPath    印章路径地址url
```
输出
```
code
msg
data

```

## 签订借款合同页
ajax_url:/wechat/loan/contract/borrow_ajax

输入
```
(需登陆)
```
输出
```
code
msg
data
    contractId      合同ID
    contractPath    合同地址

```

## 签署合同发送短信验证码
ajax_url:/wechat/loan/contract/captcha_send_ajax

输入
```
(需登陆)
```
输出
```
code
msg
data
    

```


## 客户签署借款合同
ajax_url:/wechat/loan/contract/online_sign_ajax

输入
```
contractId          合同ID
captchaCode         授权短信
```
输出
```
code
msg
data
    
```

## 判断是否开户
ajax_url:/wechat/loan/contract/check

输入
```
(需登陆)
```
输出
```
code
msg
data
    status  0 未开户 1  已开户.
    
```

