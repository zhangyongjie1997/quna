<template>
  <div>
    <home-header></home-header>
    <swiper :swiperSlides="swipers"></swiper>
    <icons :icons="iconList"></icons>
    <recommed :recommeds="recommeds"></recommed>
  </div>
</template>

<script type="text/ecmascript-6">
import homeHeader from './components/home-header.vue';
import swiper from './components/swiper.vue';
import icons from './components/icons.vue';
import recommed from './components/recommed.vue';
import axios from 'Axios';
export default {
  data() {
    return {
      swipers:[],
      iconList:[],
      recommeds:[]
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
      }
    }
  },
  components: {
    homeHeader,swiper,icons,recommed
  }
}
</script>

<style scoped>

</style>
