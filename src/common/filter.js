import moment from "moment";
export default {
	filterTimeFun: function(value) {
		return moment(value).format("YYYY-MM-DD")
	},
	filterTimeFun2: function(value) {
		return moment(value).format("YYYY/MM/DD")
	},
	filterTimeFun3: function(value) {
		return moment(value).format("YYYY年MM月DD日")
	},
	moneyFun: function(value) {
		if(value) {
			return(value + "").replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
		}

	},
	numberFn: function(value) {
		if(value) {
			return parseFloat(value).toLocaleString();
		}
	},
	showTel: function(value) {
		return(value + "").split('-')[1];
	},
	paymentMethod: function(obj) {
		if(obj.modeType == 1) {
			return obj.containerNum;
		} else if(obj.modeType == 2) {
			return obj.goodsNum;
		}
	}
}