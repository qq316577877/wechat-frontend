## 查询收货地址
ajax url:/wechat/delivery_address

输入:
```
(需登陆)
```

输出
```
code
msg
data
    receiveAddress          当前登陆人的收货地址
    codeList                国家list自带areaCode
```

## 新增收货地址
ajax url:/wechat/delivery_address/add_user_receive_address_ajax


输入
```
receiver        收货人
countryId       国家ID
provinceId      省份ID
cityId          城市ID
districtId      区域ID
address         详细地址
zipCode         邮编号码
cellPhone       手机号码
phoneNum        电话号码
selected        是否默认 (1:默认 0:非默认)
```

输出
```
code
msg
data
```

## 更新收货地址
ajax url:/wechat/delivery_address/update_user_receive_address_ajax


输入
```
id              数据记录ID
receiver        收货人
countryId       国家ID
provinceId      省份ID
cityId          城市ID
districtId      区域ID
address         详细地址
zipCode         邮编号码
cellPhone       手机号码
phoneNum        电话号码
selected        是否默认 (1:默认 0:非默认)
```

输出
```
code
msg
data
```

## 设置默认收货地址
ajax url:/wechat/delivery_address/set_default_address_ajax


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

## 删除收货地址
ajax url:/wechat/delivery_address/delete_user_receive_address_ajax


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

## 查询会员的收货地址列表
ajax url:/wechat/delivery_address/get_user_receive_address_ajax


输入
```
（需登陆）
```

输出
```
code
msg
data
    receiveAddress  收货地址列表
```