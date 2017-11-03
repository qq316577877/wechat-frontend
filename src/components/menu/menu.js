/**
 * Created by qinmenghuan on 2017/7/22.
 */

import Vue from 'vue';
import Menutem from './Menutem';

export default Vue.component('Menu', {
  template:'<Menutem :inputValue="message" :testMethod="test" />',
  components: { Menutem },
  data () {
    return {
      message: 'menu'
    }
  },
  methods:{
    test:function(event){
      console.log("test");
    }
  }
})

