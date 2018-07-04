<template>
  <div @click.self="close" class="main">
    <div class="img">
      <swiper :options="swiperOption" v-if="phos.length">
        <swiper-slide v-for="item of phos" :key="item.id">
          <img :src="item" alt="">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      phos: Array,
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
          },
          swiperWrapperSize: true,
          reverseDirection: true,
        },
      }
    },
    methods: {
      close() {
        this.$emit('close');
      }
    }
  }

</script>

<style scoped lang="less">
  .main {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 111;
    font-size: 0;
    .img {
      margin-top: 50%;
      transform: translateY(-20%);
      img {
        width: 100%;
      }
    }
  }

</style>
