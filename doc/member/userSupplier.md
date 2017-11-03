# 供应商管理


## 当前登陆用户供应商列表
ajax_url:/wechat/supplier


输入
```
(需登陆)
```

输出
```
code
msg
data
    supplierList    当前登陆用户的供应商列表
    codeList        国家list自带areaCode
```

## 新增供应商信息
ajax_url:/wechat/supplier/add_user_supplier_information_ajax


输入
```
supplierName    供应商名称
supplierContact 供应商联系人
countryId       国家ID
provinceId      省份ID
cityId          城市ID
districtId      区域ID
address         详细地址
zipCode         邮编号码
cellPhone       手机号码
phoneNum        电话号码
```
输出
```
code
msg
data
```

## 修改供应商信息
ajax_url:/wechat/supplier/update_user_supplier_information_ajax

输入
```
id              数据记录ID
supplierName    供应商名称
supplierContact 供应商联系人
countryId       国家ID
provinceId      省份ID
cityId          城市ID
districtId      区域ID
address         详细地址
zipCode         邮编号码
cellPhone       手机号码
phoneNum        电话号码
```
输出
```
code
msg
data
```

## 删除供应商信息
ajax_url:/wechat/supplier/delete_user_supplier_information_ajax


输入
```
id              数据记录ID

```
输出
```
code
msg
data
```

## 查询会员供应商信息
ajax_url:/wechat/supplier/get_user_supplier_information_ajax


输入
```
(需登陆)

```
输出
```
code
msg
data
    supplierList  供应商列表
```
