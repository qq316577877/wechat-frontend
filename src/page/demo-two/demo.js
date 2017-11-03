/**
 *
 * Created by qinmenghuan on 2017/7/22.
 */

import VueCoreImageUpload  from 'vue-core-image-upload';
 // import VuePDFViewer from 'vue-instant-pdf-viewer';
import pdf from 'vue-pdf';

///var PDFObject = require ("../../lib/pdf/pdfobject.min.js");

import obj from "../../lib/pdf/pdfobject.min.js";
// import  Helpers from "../../common/helpers.js";

// import Vue from 'vue';
// import VuePDFViewer from 'vue-pdf-viewer';


export default {
  name: 'DemoTel',
  data() {
    return {
      // pdf: require('../../lib/pdftest.pdf'),
      imgsrc: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
      show: true,
      pdfList: [
        'https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201709050943286713.pdf?Expires=1505025019&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=WcJghGfR9%2Bg8COfR6Rm2t38%2Fma8%3D',
        // 'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/freeculture.pdf',
        // 'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/annotation-link-text-popup.pdf',
        // 'https://cdn.rawgit.com/mozilla/pdf.js/c6e8ca86/test/pdfs/calrgb.pdf',
        // 'https://cdn.rawgit.com/sayanee/angularjs-pdf/68066e85/example/pdf/relativity.protected.pdf',
        'data:application/pdf;base64,JVBERi0xLjUKJbXtrvsKMyAwIG9iago8PCAvTGVuZ3RoIDQgMCBSCiAgIC9GaWx0ZXIgL0ZsYXRlRGVjb2RlCj4+CnN0cmVhbQp4nE2NuwoCQQxF+/mK+wMbk5lkHl+wIFislmIhPhYEi10Lf9/MVgZCAufmZAkMppJ6+ZLUuFWsM3ZXxvzpFNaMYjEriqpCtbZSBOsDzw0zjqPHZYtTrEmz4eto7/0K54t7GfegOGCBbBdDH3+y2zsMsVERc9SoRkXORqKGJupS6/9OmMIUfgypJL4KZW5kc3RyZWFtCmVuZG9iago0IDAgb2JqCiAgIDEzOAplbmRvYmoKMiAwIG9iago8PAogICAvRXh0R1N0YXRlIDw8CiAgICAgIC9hMCA8PCAvQ0EgMC42MTE5ODcgL2NhIDAuNjExOTg3ID4+CiAgICAgIC9hMSA8PCAvQ0EgMSAvY2EgMSA+PgogICA+Pgo+PgplbmRvYmoKNSAwIG9iago8PCAvVHlwZSAvUGFnZQogICAvUGFyZW50IDEgMCBSCiAgIC9NZWRpYUJveCBbIDAgMCA1OTUuMjc1NTc0IDg0MS44ODk3NzEgXQogICAvQ29udGVudHMgMyAwIFIKICAgL0dyb3VwIDw8CiAgICAgIC9UeXBlIC9Hcm91cAogICAgICAvUyAvVHJhbnNwYXJlbmN5CiAgICAgIC9DUyAvRGV2aWNlUkdCCiAgID4+CiAgIC9SZXNvdXJjZXMgMiAwIFIKPj4KZW5kb2JqCjEgMCBvYmoKPDwgL1R5cGUgL1BhZ2VzCiAgIC9LaWRzIFsgNSAwIFIgXQogICAvQ291bnQgMQo+PgplbmRvYmoKNiAwIG9iago8PCAvQ3JlYXRvciAoY2Fpcm8gMS4xMS4yIChodHRwOi8vY2Fpcm9ncmFwaGljcy5vcmcpKQogICAvUHJvZHVjZXIgKGNhaXJvIDEuMTEuMiAoaHR0cDovL2NhaXJvZ3JhcGhpY3Mub3JnKSkKPj4KZW5kb2JqCjcgMCBvYmoKPDwgL1R5cGUgL0NhdGFsb2cKICAgL1BhZ2VzIDEgMCBSCj4+CmVuZG9iagp4cmVmCjAgOAowMDAwMDAwMDAwIDY1NTM1IGYgCjAwMDAwMDA1ODAgMDAwMDAgbiAKMDAwMDAwMDI1MiAwMDAwMCBuIAowMDAwMDAwMDE1IDAwMDAwIG4gCjAwMDAwMDAyMzAgMDAwMDAgbiAKMDAwMDAwMDM2NiAwMDAwMCBuIAowMDAwMDAwNjQ1IDAwMDAwIG4gCjAwMDAwMDA3NzIgMDAwMDAgbiAKdHJhaWxlcgo8PCAvU2l6ZSA4CiAgIC9Sb290IDcgMCBSCiAgIC9JbmZvIDYgMCBSCj4+CnN0YXJ0eHJlZgo4MjQKJSVFT0YK',
      ],
      src:'',
      loadedRatio: 0,
      page: 1,
      numPages: 0,
      rotate: 0
    }
  },
  // data: {
  //   src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
  // },
  components: {
    'vue-core-image-upload': VueCoreImageUpload,
    'pdf': pdf
  },
  methods: {
    password: function(updatePassword, reason) {

      updatePassword(prompt('password is "test"'));
    },
    error: function(err) {

      // console.log(err);
    },
    imageuploaded:function (res) {

       // console.log("response:",res);
      if (res.code == 200) {
        this.imgsrc = res.data.url;
      }
    },
    change:function(){
      console.log("change");
      this.imgsrc="http://www.fruit.com/fruitupload/0/201709/20170902155305-375182-c7ebb8d8133d485e905fb80fd7315b90.jpg";
    }
  },
  mounted:function(){
    var options = {
      fallbackLink: "<p>该浏览器不支持pdf预览，请点击<a href=''>此处</a>下载预览</p>"
    };
    var testurl="https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201709050943286713.pdf?Expires=1505025019&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=WcJghGfR9%2Bg8COfR6Rm2t38%2Fma8%3D";

     // Helpers.pdfobject.embed("static/pdftest.pdf", "#pdf1",options);
    //var success = new PDFObject({ url: "static/pdftest.pdf" }).embed("#pdf1");

    // Helpers.pdfobject.embed(testurl, "#pdf1",options);
  }
  // created:()=>{
  //
  //
  //   // var testnode= document.querySelector("#pdf1");
  //   var testnode= document.querySelector('#btn-passage');
  //   console.log("testnode",testnode);
  //
  //
  //   // var options = {
  //   //   fallbackLink: "<p>该浏览器不支持pdf预览，请点击<a href='[url]'>此处</a>下载预览</p>"
  //   // };
  //   //  var mytesturl="https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201709050943286713.pdf?Expires=1505025019&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=WcJghGfR9%2Bg8COfR6Rm2t38%2Fma8%3D";
  //   //
  //    console.log("PDFObject:",Helpers.pdfobject);
  //   // Helpers.pdfobject.embed();
  //   // obj.PDFObject.embed(mytesturl, "#pdf1",options);
  //
  //   var options = {
  //     fallbackLink: "<p>该浏览器不支持pdf预览，请点击<a href=''>此处</a>下载预览</p>"
  //   };
  //   // decodeURIComponent(contractUrl)
  //   // 生成合同
  //   // obj.PDFObject.embed(mytesturl, "#pdf1", options);
  //
  //   var testurl="https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201709050943286713.pdf?Expires=1505025019&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=WcJghGfR9%2Bg8COfR6Rm2t38%2Fma8%3D";
  // //  pdf.test();
  //   Helpers.pdfobject.embed(testurl, "#pdf1",options);
  //   // pdf.PDFObject.embed(testurl, "#pdf1",options);
  //
  // }
}


