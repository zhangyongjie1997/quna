<template>
  <div class="wrap">
    <swiper :options="swiperOption" v-if="pages.length">
        <swiper-slide v-for="page of pages" :key="page.id">
            <div v-for="(item, index) in page" :key="index" class="icon">
              <img class="icon-img" v-lazy="item.imgUrl" alt="">
              <p class="icon-img-content">{{item.desc}}</p>
            </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    icons:Array
  },
  data() {
    return {
      swiperOption: {
          pagination: {
          el: '.swiper-pagination',
          },
          swiperWrapperSize:true,
          reverseDirection: true,
        },
    }
  },
  computed:{
    pages(){
      let pages=[];
      let count = Math.ceil(this.icons.length/8); 
      for(let i = 1,no = 0;i<=count;i++){
        pages.push(this.icons.slice(no,no+8));
        no += 8;
      }
      return pages;
    }
  }
}
</script>

<style scoped lang="less">
.wrap{
  width: 100%;
  padding-top: 10px;
}
.icon::before{
  content: '·';
  display: none;
  clear: both;
}
.icon{
  float: left;
  width: 25%;
  margin-bottom: 10px;
  img{
    width: 60%;
    display: block;
    margin: 0 auto;
  }
  .icon-img-content{
    height: 100%;
    text-align: center;
    font-size: 12px;
  }
}
</style>
