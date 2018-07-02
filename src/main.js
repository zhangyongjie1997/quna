// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
router.beforeEach(function (to,from,next) {  //每一次在进入路由之前都会执行此方法,全局钩子，可以执行一些拦截
  document.title = to.meta.title;
  next();//继续向下走，不写就不会向下走
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
