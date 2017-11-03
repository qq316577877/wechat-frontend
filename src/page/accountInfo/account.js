/**
 * 账户信息
 * Created by qinmenghuan on 2017/7/22.
 */

import Vue from 'vue';
import Accounttem from './Accounttem';

export default Vue.component('Account', {
  template:'<Accounttem :inputValue="message"/>',
  components: { Accounttem },
  data () {
    return {
      message: 'home'
    }
  }
});

// new Vue({
// //  el: '#app',
//   data :{
//       msg: 'home11'
//   }
// })

// export default{
//   components:{
//     Home
//   }
// }
