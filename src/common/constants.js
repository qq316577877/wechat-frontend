/**
 * 常量
 * Created by qinmenghuan on 2017-09-04.
 */


var isProduct=false;
//var baseUrl="http://192.168.2.51";
//var baseUrl="http://www.fruit.com";
var baseUrl="http://fruit.natapp1.cc";
var productUrl="https://www.jiuchuangjinfu.com";
 // var baseUrl="http://www.fruit.com";   // 如果有域名或ip地址
// var baseUrl="http://192.168.6.142:8009";   // 种旋
//var baseUrl="http://192.168.6.144";				//杜哥
 // var baseUrl="https://www.boshicun.com";
// var baseUrl="http://www.fruit.com";   // 如果有域名或ip地址
// var baseUrl="http://localhost:8081";
// var baseUrl="";


export default {
  isProduct:isProduct,
  baseUrl:isProduct?productUrl:baseUrl,
  imgUploadUrl:baseUrl+"/file/upload_private_ajax",
  uploadUrl:baseUrl+"/file/upload_seal_pic_ajax",

  commonData:{
    interestMsg:"利息按天计算，日利率低至0.0335%"
  }
}



