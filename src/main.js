// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
import FastClick from 'fastclick'
import VueLazyload from 'vue-lazyload';
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'http://img0.imgtn.bdimg.com/it/u=2401895806,821799314&fm=27&gp=0.jpg',
  loading: 'http://a.hiphotos.baidu.com/zhidao/pic/item/b90e7bec54e736d1afec42129d504fc2d5626929.jpg',
  attempt: 1
});
FastClick.attach(document.body);
Vue.use(VueAwesomeSwiper, /* { default global options } */)
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
