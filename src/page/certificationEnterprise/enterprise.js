/**
 * Created by yl on 2017/8/25.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import addressLinkCom from "@/components/addressLink/addressLinkCom";

export default {
	name: 'EnterpriseTel',
	components: {
		addressLinkCom
	},
	props: {
		inputValue: String
	},
	data() {
		return {
			imgUrl: require('../../assets/logo.png'),
			addressValue: ''
		}
	},
	methods: {
		personal: function() {
			this.$router.push('personal');
		},
		getAddressValue: function(data) {
			// console.log("daaa:", data);
		},
		created: function() {

		}
	}
}
