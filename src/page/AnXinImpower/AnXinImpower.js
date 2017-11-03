/**
 * 签订合同
 * Created by zong on 2017/7/22.
 */

import { MessageBox, Indicator, Toast } from 'mint-ui';
import httpRequest from "../../common/ajax.js";

export default {
	name: 'AnXinImpower',
	data() {
		return {
			readChecked:false
		}
	},
	methods: {
		anXinImpower: function() {
			if(!this.readChecked){
				Toast({
					message: '您未同意开通!',
					position: 'middle',
					duration: 2000
				});
				return;
			}
			MessageBox.confirm('确定开通安心签账号?').then(action => {
				Indicator.open();
				httpRequest({
					url: "/wechat/axq/openAccount",
					success: (response) => {
						console.log("开通", response);
						if(response.code == 200) {
							MessageBox.alert('开通成功!').then(action => {
								this.$router.push('/signature');
							});
						}
					},
					complete: () => {
						Indicator.close();
					}
				});
			});
		}
	}
}