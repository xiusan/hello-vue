// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//导入app组件
import App from './App'

import router from './router'
//导入ElementUI和样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'

import axios from 'axios'
// 将axios工具绑定到vue实例的原型中：目的：为了在任何vue组件中都能够使用this.$axios获取axios工具
Vue.prototype.$axios = axios;

Vue.config.productionTip = false

//开启
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
