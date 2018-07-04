<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view class="transitionBody"></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        transitionName:''
      }
    },
    watch:{
      $route(to,from){
        switch(to.name){
          case'home':
            this.transitionName = 'transitionRight';
            return;
          case 'city':
            this.transitionName = 'transitionLeft';
            return;
          case 'detail':
            this.transitionName = 'transitionLeft';
            return;
        }
      }
    }
  }

</script>

<style>
  @import url('./css/reset.css');
  .pointer {
    cursor: pointer;
  }

  .transitionBody {
    transition: all 0.3s ease;
    /*定义动画的时间和过渡效果*/
  }
  .transitionLeft-enter,
  .transitionRight-leave-active {
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    /*当左滑进入右滑进入过渡动画*/
  }
  .transitionLeft-leave-active,
  .transitionRight-enter {
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }

</style>
