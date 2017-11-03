/**
 * 电子签名
 * Created by qinmenghuan on 2017/7/22.
 */


require ('../../lib/jquery/jquery.min.js');
require ('../../lib/canvasSignature/canvasSignature.js');
import axios from 'axios';
import VueCoreImageUpload  from 'vue-core-image-upload';

export default {
  name: 'SignDemoTel',
  data() {
    return {
      src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png'
    }
  },
  methods: {
    password: function(updatePassword, reason) {
    },
    imageuploaded:function (res) {
      // console.log("response:",res);
    },
   convertBase64UrlToBlob: function (urlData){
      var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

      //处理异常,将ascii码小于0的转换为大于0
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob( [ab] , {type : 'image/png'});
    }
},
  components: {
    'vue-core-image-upload': VueCoreImageUpload
  },
  mounted:function(){

    function convertBase64UrlToBlob  (urlData){
      var bytes=window.atob(urlData.split(',')[1]);        //去掉url的头，并转换为byte

      //处理异常,将ascii码小于0的转换为大于0
      var ab = new ArrayBuffer(bytes.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < bytes.length; i++) {
        ia[i] = bytes.charCodeAt(i);
      }
      return new Blob( [ab] , {type : 'image/png'});
    }


    $(function(){
      //初始化签名样式（这里仅支持一个签名，如需多个签名框需改写组件）
      $('#signName').canvasSignature({
        fillStyle:'transparent',	//生成图片背景色，默认为透明
        lineWidth:10,	//笔画粗细（尺寸），默认为四像素粗细
        strokeStyle:'red'	//笔画颜色，默认为黑色
      });

      //清除重写
      $('#clearCanvas').on('click',function(){
        //清除重写调用方式
        $('#signName').clearSignature();
      });

      //生成图片
      $('#createImage').on('click',()=>{
        //生成图片格式base64包括：jpg、png格式
        //console.log($('#signName').createSignature('png'));
        $('#newImage').attr('src',$('#signName').createSignature('png'));



//         let formData = new FormData();
//         formData.append("username", "Groucho");
//         formData.append("accountnum", "123456"); // number 123456 is immediately converted to a string "123456"
//
// // HTML file input, chosen by user
//       //  formData.append("userfile", fileInputElement.files[0]);
//
// // JavaScript file-like object
//         var content = '<a id="a"><b id="b">hey!</b></a>'; // the body of the new file...
//         // var blob = new Blob([content], { type: "text/xml"});
//         //
//         // formData.append("webmasterfile", blob);
//
//         var request = new XMLHttpRequest();
//         request.open("POST", "http://192.168.6.144/file/upload_private_ajax");
//
//         request.onload = function(oEvent) {
//           if (request.status == 200) {
//               console.log("success");
//           } else {
//             console.log("error");
//           }
//         };
//         request.send(formData);
//
//
//         return;

        const formData = new FormData();
        var obj=convertBase64UrlToBlob( $('#signName').createSignature('png'));
        formData.append('files', obj,"blob.png");



        // formData.append('filename',"blob.png");
        // formData.append('files', $('#signName').createSignature('png'));
        // formData.append('name', this.data.name)
        // formData.append('username', this.data.username)
        // formData.append('password', this.data.password)


        var authOptions = {
          method: 'POST',
          url: "http://192.168.2.51/file/upload_private_ajax",
          data: formData,
          headers: {
            'Content-Type': 'image/png'
           // 'X-Requested-With': 'XMLHttpRequest'
          }
          //withCredentials:true
          //json: true
        };
        // post请求
        axios(authOptions).then(
            (response)=> {
              alert(JSON.stringify(response));

            }
          )
          .catch(function (error) {
            // console.log("error:",error);
          });

        // axios.post('http://192.168.2.51/file/upload_private_ajax', formData)
        //   .then(function (response) {
        //     console.log(response)
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })


        // axios.put("http://192.168.2.51/file/upload_private_ajax", $('#signName').createSignature('png'), {
        //   headers: {
        //     'Content-Type':"image/png"
        //   }
        // });

      });

    });
  }
}


