<template>
  <div class="wrap">
    <swiper :options="swiperOption" v-if="swiperSlides.length">
        <swiper-slide v-for="item of swiperSlides" :key="item.id">
            <img :src="item.imgUrl" alt="">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    swiperSlides:Array
  },
  data() {
    return {
      swiperOption: {
          pagination: {
          el: '.swiper-pagination',

          },
          autoplay:{
            delay:3500
          },
          swiperWrapperSize:true,
          reverseDirection: true,
        },
    }
  },
  components: {

  }
}
</script>

<style scoped>
.wrap{
  width: 100%;
  margin-top: 40px;
}
img{
  width: 100%;
}
</style>
