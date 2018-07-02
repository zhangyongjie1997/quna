<template>
  <div>
    <home-header></home-header>
    <swiper :swiperSlides="swipers"></swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import homeHeader from './components/home-header.vue';
import swiper from './components/swiper.vue';
import axios from 'Axios';
export default {
  data() {
    return {
      swipers:[]
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
      }
    }
  },
  components: {
    homeHeader,swiper
  }
}
</script>

<style scoped>

</style>
