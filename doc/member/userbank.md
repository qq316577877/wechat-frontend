# 用户银行卡
 
## 用户银行卡列表信息
ajax url:/wechat/bank

输入
```
  (需登陆)
```
输出
```
code
msg
data
    bankCards   用户银行卡列表信息
    bankList    银行列表信息
```  
    
    

## 添加银行信息
ajax url:/wechat/bank/add_user_bank_information_ajax

输入
```
accountName         账户名称
provinceId          开户省
cityId              开户市
districtId          区域
bankTypeId          银行类型
bankName            开户支行名称
bankCard            卡号
```
输出
```
code
msg
data
```

## 更新银行卡信息
ajax url:/wechat/bank/update_user_bank_information_ajax

输入
```
id  数据ID
accountName         账户名称
provinceId          开户省
cityId              开户市
districtId          区域
bankTypeId          银行类型
bankName            开户支行名称
bankCard            卡号
```
输出
```
code
msg
data
```
## 删除银行卡信息
ajax url:/wechat/bank/delete_user_bank_information_ajax


输入:
```
id  数据ID

```
输出
```
code
msg
data
```

## 查询用户银行卡信息
ajax url:/wechat/bank/get_user_bank_information_ajax


输入
```
(登陆状态)

```
输出
```
code
msg
data
    bankCards 银行卡信息列表
```

## 验证银行卡信息是否可添加
ajax url:/wechat/bank/check_user_bank_information_ajax


输入
```
bankCard    银行卡号

```
输出
```
code
msg
data
```
    