/**
 * Created by zong on 2017/9/6.
 */
import Vue from 'vue';
import {Swipe, SwipeItem} from 'mint-ui';


export default {
	name: 'homeTel',
	data() {
		return {
			swiperSlides: [{
					imgurl: require('../../assets/temp/advantage_financial.jpg'),
					title: '专业采购团队'
				},
				{
					imgurl: require('../../assets/temp/advantage_logistics.jpg'),
					title: '正规物流合作'
				},
				{
					imgurl: require('../../assets/temp/advantage_team.jpg'),
					title: '提供金融服务'
				}
			],
			productList: [{
					imgurl: require("../.././assets/temp/product1.jpg"),
					name: "越南白心火龙果",
					grade: "一级大果",
					price: "￥:8888.00/kg",
					productId: "1"
				},
				{
					imgurl: require("../.././assets/temp/product2.jpg"),
					name: "越南红心火龙果",
					grade: "一级中果",
					descripe: "越南进口红心火龙果 单果约450~500g 清新柑香 美味爽口 惊艳你的味蕾",
					price: "￥:6141.00/kg",
					productId: "2"
				},
				{
					imgurl: require("../.././assets/temp/product4.jpg"),
					name: "南美大虾",
					grade: "一级小果",
					descripe: "南美大虾 优胜食新鲜 虾仁 冷冻 大虾仁速冻水晶 野生南美白青虾仁 ",
					price: "￥:5555.00/kg",
					productId: "4"
				},
				{
					imgurl: require("../.././assets/temp/product5.jpg"),
					name: "越南大米 ",
					grade: "二级中果",
					descripe: "越南大米 纯天然绿色优质大米 淀粉含量高 放心安心使用 用心的选择",
					price: "￥:2368.00/kg",
					productId: "5"
				},
				{
					imgurl: require("../.././assets/temp/product1.jpg"),
					name: "越南白心火龙果",
					grade: "一级大果",
					
					price: "￥:8888.00/kg",
					productId: "1"
				},
				{
					imgurl: require("../.././assets/temp/product2.jpg"),
					name: "越南白心火龙果",
					grade: "二级小果",
					descripe: "越南进口红心火龙果 单果约450~500g 清新柑香 美味爽口 惊艳你的味蕾",
					price: "￥:6141.00/kg",
					productId: "2"
				},
				{
					imgurl: require("../.././assets/temp/product4.jpg"),
					name: "越南白心火龙果",
					grade: "一级大果",
					descripe: "南美大虾 优胜食新鲜 虾仁 冷冻 大虾仁速冻水晶 野生南美白青虾仁 ",
					price: "￥:5555.00/kg",
					productId: "4"
				},
				{
					imgurl: require("../.././assets/temp/product5.jpg"),
					name: "越南白心火龙果",
					grade: "二级大果",
					descripe: "越南大米 纯天然绿色优质大米 淀粉含量高 放心安心使用 用心的选择",
					price: "￥:2368.00/kg",
					productId: "5"
				},
			]
		}
	},
	components: {
		
	}
}