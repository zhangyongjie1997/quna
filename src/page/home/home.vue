<template>
  <div>
    <!-- <vue-loading class="load"
                 v-if="loading"
                 type="spiningDubbles"
                 color="#d9544e"
                 :size="{ width: '50px', height: '50px' }"></vue-loading> -->
    <div v-if="!loading">
      <home-header></home-header>
      <swiper :swiperSlides="swipers"></swiper>
      <icons :icons="iconList"></icons>
      <recommed :recommeds="recommeds"></recommed>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import homeHeader from './components/home-header.vue';
import swiper from './components/swiper.vue';
import icons from './components/icons.vue';
import recommed from './components/recommed.vue';
import vueLoading from 'vue-loading-template';
import axios from 'Axios';
export default {
  data() {
    return {
      swipers:[],
      iconList:[],
      recommeds:[],
      loading:true,
    }
  },
  mounted(){
    this.getHomeInfo();
  },
  methods:{
    getHomeInfo(){
      axios.get('/static/index.json').then(this.initHomeInfo);
    },
    initHomeInfo(res){
      if(res.status ==200){
        this.swipers = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommeds = res.data.recommed;
        this.loading = false;
      }
    }
  },
  updated(){
    //this.loading = false;
  },
  components: {
    homeHeader,swiper,icons,recommed,vueLoading
  }
}
</script>

<style scoped>

</style>
