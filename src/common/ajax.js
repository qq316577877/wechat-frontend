/**
 * ajax抽共通
 * Created by qinmenghuan on 2017/8/30.
 */

import axios from 'axios';
import {Toast} from 'mint-ui';
import constants from "./constants.js";

export default function httpRequest(paramsVal) {
  //var baseUrl="http://www.fruit.com";   // 如果有域名或ip地址
  var baseUrl=constants.baseUrl;
  // 为空判断
  if (!paramsVal.params) {
    paramsVal.params = {};
  }
  var requestUrl = baseUrl+paramsVal.url;
  // 如果是测本地接口
  if(paramsVal.type=="GET"){
    requestUrl="/static/"+paramsVal.url;
  }
  // 如果是业务请求需要token

//var openid=localStorage.getItem("openid");
var openid="oApxr0p7TR7hKirMmAf3_8nq8y4o";
//var openid="oApxr0ssosdNRA3xZbPDkMycqFqw";
  if(openid&&openid!=""){
//  var userInfo= JSON.parse(userInfostr);
    if(!paramsVal.isNew){
      if(!constants.isProduct){
        requestUrl+='?openid='+openid;
      }
    }
  }
  var authOptions = {
    method: paramsVal.type||'POST',
    url: requestUrl,
    timeout: 100000,
    data: paramsVal.params,
    headers: {
      'Content-Type': paramsVal.isNew==undefined?'application/json;charset=utf-8':'application/x-www-form-urlencoded;charset=utf-8',
      // 'X-Requested-With': 'XMLHttpRequest' // 以后可以注释掉
    },
    withCredentials:constants.isProduct,
    json: true
  };
  // post请求
  axios(authOptions)
    .then(
      (response)=> {
        // alert(JSON.stringify(response));
        // 完成事件
        if(paramsVal.complete){
          paramsVal.complete();
        }
        // http请求状态码判断
        if(response.status==200){
          var reponsedata = response.data;
          if (reponsedata.code == 200) {
            paramsVal.success(reponsedata);
          } else if(reponsedata.code==100){
            Toast({
              message: reponsedata.msg,
              position: 'middle',
              duration: 2000
            });

            if(paramsVal.router){
              paramsVal.router.$router.push('login');
            }

          } else{
            Toast({
              message: reponsedata.msg,
              position: 'middle',
              duration: 2000
            });
          }
        }else{
          // Toast({
          //   message: '网络请求不成功',
          //   position: 'middle',
          //   duration: 2000
          // });
          paramsVal.error();
        }
      }
    )
    .catch(function (error) {
      Toast({
        message: '网络请求不成功!',
        position: 'middle',
        duration: 2000
      });
      paramsVal.complete();
    });
}

