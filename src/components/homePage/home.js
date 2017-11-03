/**
 * Created by qinmenghuan on 2017/7/22.
 */
import Vue from 'vue'
import Hometel from './Hometel'


export default Vue.component('Home', {
 // template: '<div>template from Home{{ message }}</div>',
  //template: 'template from Home.Vue',
  template:'<Hometel :inputValue="message"/>',
  components: { Hometel },
  data () {
    return {
      message: 'home'
    }
  }
})

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
