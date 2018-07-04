import Vue from 'vue';
import Router from 'vue-router';
import home from '../page/home/home.vue';
import city from '../page/city/city.vue';
import detail from '../page/detail/detail.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta:{title:'首页'}
    },
    {
      path: '/city',
      name: 'city',
      component: city,
      meta:{title:'选择城市'}
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: detail,
      meta:{title:'详情'}
    }
  ]
})
