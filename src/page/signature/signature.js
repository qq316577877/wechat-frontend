/**
 * 电子签名
 * Created by zong on 2017/9/12.
 */

require('../../lib/jquery/jquery.min.js');
require('../../lib/canvasSignature/canvasSignature.js');
import constants from "../../common/constants.js";
import { MessageBox, Indicator, Toast } from 'mint-ui';
import axios from 'axios';
import VueCoreImageUpload from 'vue-core-image-upload';
import httpRequest from "../../common/ajax.js";

export default {
	name: 'signature',
	data() {
		return {
			src: 'http://img1.vued.vanthink.cn/vued0a233185b6027244f9d43e653227439a.png',
			newSrc: "",
			imgSrc: ""
		}
	},
	components: {
		'vue-core-image-upload': VueCoreImageUpload
	},
	methods: {
		password: function(updatePassword, reason) {},
		imageuploaded: function(res) {
			// console.log("response:",res);
		},
		convertBase64UrlToBlob: function(urlData) {
			var bytes = window.atob(urlData.split(',')[1]); //去掉url的头，并转换为byte

			//处理异常,将ascii码小于0的转换为大于0
			var ab = new ArrayBuffer(bytes.length);
			var ia = new Uint8Array(ab);
			for(var i = 0; i < bytes.length; i++) {
				ia[i] = bytes.charCodeAt(i);
			}
			return new Blob([ab], {
				type: 'image/png'
			});
		},
		//上传图片
		upImage: function() {
			MessageBox.confirm('您确定要使用这个签名?').then(action => {
				const formData = new FormData();
				var imgObj = this.getImgUrl();
				//				console.log("aaaaa--------"+imgObj);
				this.resizeImageNew(imgObj);
				var obj = this.convertBase64UrlToBlob($('#newImage').createSignature('png'));
				console.log($('#newImage').height(), $('#newImage').width());
				formData.append('files', obj, "blob.png");
				Indicator.open();
				var authOptions = {
					method: 'POST',
					url: constants.uploadUrl,
					data: formData,
					headers: {
						'Content-Type': 'image/png'
					}
				};
				// post请求
				axios(authOptions).then(
						(response) => {
							console.log(response);
							if(response.data.code == 200) {
								this.newSrc = response.data.data.path;
								this.upAnXinQian();
							};
							if(!response.data.code == 200) {
								Indicator.close();
								Toast(response.data.msg);
							}
						}
					)
					.catch(function(error) {});
			});

		},
		upAnXinQian: function() {
			httpRequest({
				url: "/wechat/axq/eseal",
				params: {
					sealPath: this.newSrc
				},
				success: (response) => {
					console.log(response);
					MessageBox.alert('提交成功').then(action => {
						this.$router.push('signContract');
					});
				},
				complete: () => {
					Indicator.close();
				}
			});
		},
		//清空画布
		clearCanvas: function() {
			$('#signName').clearSignature();
		},
		resizeImageNew: function(image) {
			var x = 0,
				y = 0,
				width = image.width,
				height = image.height,
				nowWidth = 200,
				nowHeight = 200;
			//				console.log(width,height);
			var canvas = $('#newImage')[0],
				ctx = canvas.getContext('2d');

			ctx.drawImage(image, x, y, width, height, 0, 0, nowWidth, nowHeight);
			//document.body.append(canvas);
			//			console.log(canvas.height,canvas.width);
			var src = this.getImgUrl(canvas).src;
			//			alert(src);
			//			return src;

			this.imgSrc = src;
			//			console.log($("#aa").height(),$("#aa").width());
		},
		getImgUrl: function(canvas) {
			var nowCanvas = $('#signName')[0];
			var img = new Image();
			img.setAttribute('crossOrigin', '*');
			//img.src='file:///C:/Users/duzhongpeng/Desktop/统计图/第一个图表-订单信贷基础统计/1.png';
			img.src = nowCanvas.toDataURL("image/png");
			return img;
		}
	},
	mounted: function() {
		$(function() {
			var dpr = $("html").attr("data-dpr");
			//			console.log("dpr:", dpr);
			var c = $("#signName"),
				ctx = c[0].getContext('2d');
			ctx.canvas.height = 320 * dpr;
			ctx.canvas.width = 320 * dpr;

			//初始化签名样式（这里仅支持一个签名，如需多个签名框需改写组件）
			$('#signName').canvasSignature({
				fillStyle: 'transparent', //生成图片背景色，默认为透明
				lineWidth: 10, //笔画粗细（尺寸），默认为四像素粗细
				strokeStyle: 'red' //笔画颜色，默认为黑色
			});
		});
	},
	created() {
		$("body").on("touchmove", function(e) {
			e.preventDefault();
		});
	}
}