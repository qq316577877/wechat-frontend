import Vue from 'vue'
import Router from 'vue-router'
import HomeTel from '@/page/home/homeTel'
import MineCom from '@/page/mine/mineCom';
import Accredit from '@/page/accredit/accreditCom';
import productDetail from '@/page/productDetail/productDetail';
import SupplierTel from '@/page/supplier/supplierTel';
import AddSupplier from '@/page/addSupplier/addSupplierTel';
import DemoTel from '@/page/demo/DemoTel';
import AddressList from '@/page/address/addressList';
import AddAddress from '@/page/addAddress/AddAddressTel';
import Bank from '@/page/bank/BankTel';
import AddBank from '@/page/addBank/AddBankTemplate';
import PersonalTel from '@/page/authenticationPersonal/PersonalTel';
import PersonalSecond from '@/page/personalSecond/personalSecondTem';
import EnterpriseTel from '@/page/certificationEnterprise/EnterpriseTel';
import hasBanner from '@/components/hasBanner/hasBanner';
import LoginCom from '@/page/login/LoginCom';
import findPwdTel from '@/page/findPwd/findPwdTel';
import findPwdSecondTel from '@/page/findPwdSecond/findPwdSecondTel';
import Register from '@/page/register/registerTel';
import LoanAplication from '@/page/loanAplication/loanAplicationCom';
import Servicelist from '@/page/servicelist/servicelistCom';
import ServicelistParticulars from '@/page/servicelistParticulars/servicelistParticularsCom';
import AuthEnterpriseSecond from '@/page/authEnterpriseSecond/authEnterpriseSecondCom';
import ApplyForLoan from '@/page/applyForLoan/applyForLoanCom';
import UploadTheSeal from '@/page/UploadTheSeal/UploadTheSealTem';
import SignDemoTel from '@/page/demo/SignDemoTel';
import Setting from '@/page/setting/settingTel';
import Security from '@/page/security/securityTel';
import Modifytel from '@/page/modifyTel/modifytelTel';
import ModifyTelSecond from '@/page/modifyTelSecond/modifyTelSecondTel';
import ModifyPwd from '@/page/modifyPwd/modifyPwdTel';
import ModifyMail from '@/page/modifyMail/modifyMailTel';
import ModifyQQ from '@/page/modifyQQ/modifyQQTel';
import AboutUs from '@/page/aboutUs/aboutUsTel';
import Certification from '@/page/certificationDetail/certificationTel';
import ProductList from '@/page/productList/ProductList';
import Signature from '@/page/signature/signatureTel';
import SignContract from '@/page/signContract/signContractTel';
import AnXinImpower from '@/page/AnXinImpower/AnXinImpowerTel';
import SignContractCS from '@/page/signContractCS/signContractCSTel';
import DetailsList from '@/page/detailsList/detailsListCom';
import CreateOrder from '@/page/createOrder/createOrderCom';
import DetailsIndent from '@/page/detailsIndent/detailsIndentCom';
import OrderSubmit from '@/page/orderSubmit/orderSubmitCom';
import LogisticsInfo from '@/page/logisticsInfo/logisticsInfoCom';
import DetailsContainer from '@/page/detailsContainer/detailsContainerCom';
import PersonalCreditContract from '@/page/personalCreditContract/personalCreditContractCom';

import DetailsListCESHI from '@/page/detailsListCESHI/detailsListComCESHI';
Vue.use(Router);

export default new Router({
	routes: [{
			path: '/',
			name: 'hasBanner',
			component: hasBanner,
			children: [{
					path: "home",
					name: "HomeTel",
					component: HomeTel
				},
				{
					path: "mine",
					name: "MineCom",
					component: MineCom,
					meta: {
						title: '我的'
					}
				},
				{
					path: "productDetail",
					name: "productDetail",
					component: productDetail
				},
				//明细列表
				{
					path: "/detailsList",
					name: "detailsList",
					component: DetailsList,
					meta: {
						keepAlive: false,
						title: '明细列表'
					}
				},
				//明细列表-测试版
				{
					path: "/detailsListCESHI",
					name: "detailsListCESHI",
					component: DetailsListCESHI
				}
			]
		},
		// 新下单界面
		{
			path: "/createOrder",
			name: "createOrder",
			component: CreateOrder,
			meta: {
				title: '下单'
			}
		},
		//收货地址
		{
			path: '/address',
			name: 'addressList',
			component: AddressList,
			meta: {
				title: '收货地址'
			}
		},
		//新增收货地址
		{
			path: '/addaddress',
			name: 'AddAddress',
			component: AddAddress,
			meta: {
				title: '新增收货地址'
			}
		},
		//银行账号
		{
			path: '/bank',
			name: 'Bank',
			component: Bank,
			meta: {
				title: '银行账号'
			}
		},
		//添加银行账号
		{
			path: '/addBank',
			name: 'AddBank',
			component: AddBank,
			meta: {
				title: '添加银行账号'
			}
		},
		//个人认证
		{
			path: '/personal',
			name: 'PersonalTel',
			component: PersonalTel,
			meta: {
				title: '个人认证'
			}
		},
		//个人认证第二步
		{
			path: '/personalSecond',
			name: 'PersonalSecond',
			component: PersonalSecond,
			meta: {
				title: '个人认证第二步'
			}
		},
		//企业认证
		{
			path: '/enterprise',
			name: 'EnterpriseTel',
			component: EnterpriseTel,
			meta: {
				title: '企业认证'
			}
		},
		//认证详情
		{
			path: '/certification',
			name: 'Certification',
			component: Certification,
			meta: {
				title: '认证详情'
			}
		},
		// 供应商
		{
			path: "/supplier",
			name: "Supplier",
			component: SupplierTel,
			meta: {
				title: '供应商'
			}
		},
		// 新增供应商
		{
			path: "/addSupplier",
			name: "AddSupplier",
			component: AddSupplier,
			meta: {
				title: '新增供应商'
			}
		},
		// Demo
		{
			path: "/demo",
			name: "Demo",
			component: DemoTel
		},
		// 登陆
		{
			path: "/login",
			name: "login",
			component: LoginCom,
			meta: {
				title: '登录'
			}
		},
		//注册
		{
			path: "/Register",
			name: "Register",
			component: Register,
			meta: {
				title: '注册'
			}
		},
		//忘记密码
		{
			path: "/findPwd",
			name: "findPwdTel",
			component: findPwdTel,
			meta: {
				title: '忘记密码'
			}
		},
		//忘记密码第二步
		{
			path: "/findPwdSecond",
			name: "findPwdSecondTel",
			component: findPwdSecondTel,
			meta: {
				title: '忘记密码第二步'
			}
		},
		//申请列表
		{
			path: "/loanAplication",
			name: "loanAplication",
			component: LoanAplication,
			meta: {
				title: '申请列表'
			}
		}, //贷款列表
		{
			path: "/servicelist",
			name: "servicelist",
			component: Servicelist,
			meta: {
				keepAlive: true,
				title: "贷款列表"
			}
		}, //贷款列表详情
		{
			path: "/servicelistParticulars",
			name: "ServicelistParticulars",
			component: ServicelistParticulars,
			meta: {
				title: '贷款列表详情'
			}
		},
		// 企业认证第二步
		{
			path: "/authEnterpriseSecond",
			name: "AuthEnterpriseSecond",
			component: AuthEnterpriseSecond,
			meta: {
				title: '企业认证第二步'
			}
		},
		//申请贷款
		{
			path: "/applyForLoan",
			name: "ApplyForLoan",
			component: ApplyForLoan,
			meta: {
				title: '申请贷款'
			}
		},
		//上传印章
		{
			path: "/UploadTheSeal",
			name: "UploadTheSeal",
			component: UploadTheSeal,
			meta: {
				title: '上传印章'
			}
		},
		// 签名demo
		{
			path: "/sign",
			name: "SignDemoTel",
			component: SignDemoTel
		},
		//设置
		{
			path: "/setting",
			name: "Setting",
			component: Setting,
			meta: {
				title: '设置'
			}
		},
		//账户安全
		{
			path: "/security",
			name: "Security",
			component: Security,
			meta: {
				title: '账户安全'
			}
		},
		//修改手机
		{
			path: "/modifytel",
			name: "Modifytel",
			component: Modifytel,
			meta: {
				title: '修改手机'
			}
		},
		//修改手机第二步
		{
			path: "/modifyTelSecond",
			name: "ModifyTelSecond",
			component: ModifyTelSecond,
			meta: {
				title: '设置新密码'
			}
		},
		//修改密码
		{
			path: "/modifyPwd",
			name: "ModifyPwd",
			component: ModifyPwd,
			meta: {
				title: '修改密码'
			}
		},
		//修改邮箱
		{
			path: "/modifyMail",
			name: "ModifyMail",
			component: ModifyMail,
			meta: {
				title: '修改邮箱'
			}
		},
		//修改QQ
		{
			path: "/modifyQQ",
			name: "ModifyQQ",
			component: ModifyQQ,
			meta: {
				title: '修改QQ'
			}
		},
		//关于我们
		{
			path: "/aboutUs",
			name: "AboutUs",
			component: AboutUs,
			meta: {
				title: '关于我们'
			}
		},
		// 下单的商品列表
		{
			path: "/productlist",
			name: "ProductList",
			component: ProductList,
			meta: {
				title: '下单'
			}
		},
		//手写签名
		{
			path: "/signature",
			name: "signature",
			component: Signature,
			meta: {
				title: '手写签名'
			}
		},
		//安心签开户
		{
			path: "/AnXinImpower",
			name: "AnXinImpower",
			component: AnXinImpower,
			meta: {
				title: '安心签开户'
			}
		},
		//签订合同
		{
			path: "/signContract",
			name: "signContract",
			component: SignContract,
			meta: {
				title: '签订合同'
			}
		},
		//签订合同CS
		{
			path: "/signContractCS",
			name: "signContractCS",
			component: SignContractCS
		},
		//明细_货柜详情
		{
			path: "/detailsContainer",
			name: "detailsContainer",
			component: DetailsContainer,
			meta: {
				title: '货柜详情'
			}
		},
		//明细_订单详情
		{
			path: "/detailsIndent",
			name: "detailsIndent",
			component: DetailsIndent,
			meta: {
				title: '订单详情'
			}
		},
		//订单提交授权
		{
			path: "/orderSubmit",
			name: "orderSubmit",
			component: OrderSubmit,
			meta: {
				title: '订单提交授权'
			}
		},
		// 物流信息
		{
			path: "/logistics",
			name: "Logistics",
			component: LogisticsInfo,
			meta: {
				title: '物流信息'
			}
		},
		// 个人信用合同
		{
			path: "/personalCreditContract",
			name: "personalCreditContract",
			component: PersonalCreditContract,
			meta: {
				title: '个人信用报告查询授权书'
			}
		},
		//授权页面
		{
			path: "/accredit",
			name: "Accredit",
			component: Accredit,
		}
	]
})