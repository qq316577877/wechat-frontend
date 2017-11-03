/**
 * 忘记密码
 * Created by yl on 2017/9/5.
 */
import { MessageBox, Toast, Indicator } from 'mint-ui';
import  Helpers from "../../common/helpers.js";
import httpRequest from "../../common/ajax.js";


export default {
  name: 'aboutUs',

  props: {
    inputValue: String
  },
  data() {
    return {
      imgUrl: require('../../assets/logo.png'),
    }
  },
  methods: {

  }
}
