<template>
  <div class="hello_tem">

    <!--<button @click="change()">切换</button>-->
    <!--<p class="user center">-->
      <!--<img :src="imgsrc" class="avatar">-->
    <!--</p>-->

    <!--<vue-core-image-upload-->
      <!--:class="['btn', 'btn-primary']"-->
      <!--:crop="false"-->
      <!--@imageuploaded="imageuploaded"-->
      <!--:max-file-size="5242880"-->
      <!--url="http://192.168.2.51/file/upload_private_ajax">-->
    <!--</vue-core-image-upload>-->

    <!--<div id="pdf1" style="width:700px; height:600px;">-->
      <!--1It appears you don't have Adobe Reader or PDF support in this web browser.-->
      <!--<a href="~/pdf/CGVET22-08-2011V2P.pdf">Click here to download the PDF</a>-->
    <!--</div>-->

    <button type="button" id="btn-passage" >获取验证码</button>
    <!--<object data="static/pdftest.pdf" type="application/pdf" width="100%" height="100%">-->
      <!--<p><b>Example fallback content</b>: This browser does not support PDFs. Please download the PDF to view it: <a href="static/pdftest.pdf">Download PDF</a>.</p>-->
    <!--</object>-->


    <!--<vue-pdf-viewer height="500px" :url="url">-->
    <!--</vue-pdf-viewer>-->
    <!--<pdf ref="myPdfComponent" src="https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201709050943286713.pdf?Expires=1505025019&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=WcJghGfR9%2Bg8COfR6Rm2t38%2Fma8%3D"></pdf>-->

    <pdf ref="myPdfComponent" src="static/pdftest.pdf"></pdf>
    <!--<div>-->
      <!--<input type="checkbox" v-model="show">-->
      <!--<select v-model="src" style="width: 30em">-->
        <!--<option v-for="item in pdfList" :value="item" v-text="item"></option>-->
      <!--</select>-->
      <!--<input v-model.number="page"  type="number" style="width: 5em"> /{{numPages}}-->
      <!--<button @click="rotate += 90">&#x27F3;</button>-->
      <!--<button @click="rotate -= 90">&#x27F2;</button>-->
      <!--<button @click="$refs.pdf.print()">print</button>-->
      <!--<div style="width: 50%">-->
        <!--<div v-if="loadedRatio > 0 && loadedRatio < 1" style="background-color: green; color: white; text-align: center" :style="{ width: loadedRatio * 100 + '%' }">{{ Math.floor(loadedRatio * 100) }}%</div>-->
        <!--<pdf v-if="show" ref="pdf" style="border: 1px solid red" :src="src" :page="page" :rotate="rotate" @password="password" @progress="loadedRatio = $event" @error="error" @numPages="numPages = $event"></pdf>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script type="es6" src="./demo.js"></script>
<!--<script >-->
  <!--import  Helpers from "../../common/helpers.js";-->
  <!--var options = {-->
    <!--fallbackLink: "<p>该浏览器不支持pdf预览，请点击<a href=''>此处</a>下载预览</p>"-->
  <!--};-->

  <!--var testurl="https://ovft-file-test.oss-cn-hangzhou.aliyuncs.com/201709050943286713.pdf?Expires=1505025019&OSSAccessKeyId=LTAIMsY9iRDZN9vo&Signature=WcJghGfR9%2Bg8COfR6Rm2t38%2Fma8%3D";-->
  <!--//  pdf.test();-->
  <!--Helpers.pdfobject.embed(testurl, "#pdf1",options);-->
<!--</script>-->
