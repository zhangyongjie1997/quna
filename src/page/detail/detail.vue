<template>
  <div class="main">
    <transition name="fade">
      <pho @close="showPho" :phos="gallaryImgs" v-if="ifShowPho"></pho>
    </transition>
    <div @click="back" class="back">
      <i class="iconfont icon-fanhui"></i>
    </div>
    <div class="photo" @click="showPho">
      <div class="banner">
        <span>{{sightName}}</span>
        <span class="rightSpan" @click="showPho">
          <i class="iconfont icon-sousuo"></i>
          33
        </span>
      </div>
      <img :src="bannerImg">
    </div>
    <div class="ticket">
      <ul>
        <li class="ticketItem" v-for="(item, index) in categoryList" :key="index">
          <span>
            <i class="iconfont icon-piaowuxinxi"></i>
          </span>
          <span>{{item.title}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import axios from "Axios";
  import pho from './detailPho.vue';
  export default {
    data() {
      return {
        bannerImg: '',
        gallaryImgs: [],
        sightName: '',
        categoryList: [],
        ifShowPho: false,
      }
    },
    created() {
      axios.get('/static/detail.json').then(this.initInfo);
    },
    methods: {
      showPho() {
        this.ifShowPho = !this.ifShowPho;
      },
      initInfo(res) {
        if (res.status == 200) {
          this.bannerImg = res.data.data.bannerImg;
          this.gallaryImgs = res.data.data.gallaryImgs;
          this.sightName = res.data.data.sightName;
          this.categoryList = res.data.data.categoryList;
        }
      },
      back() {
        this.$router.go(-1);
      }
    },
    components: {
      pho
    }
  }

</script>

<style scoped lang="less">
  .back {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 50px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: bolder;
    color: #fff;
    z-index: 100;
  }

  .main {
    .ticket {
      .ticketItem {
        height: 30px;
        line-height: 30px;
        padding: 10px;
        font-size: 20px;
        i {
          color: rgb(8, 113, 235);
        }
      }
    }
    .photo {
      position: relative;
      font-size: 0;
      .banner {
        display: flex;
        position: absolute;
        align-items: center;
        justify-content: space-between;
        padding: 0 15px;
        box-sizing: border-box;
        bottom: 0px;
        height: 15%;
        width: 100%;
        color: rgba(255, 255, 255, 0.9);
        font-size: 20px;
        background-color: rgba(0, 0, 0, 0.3);
        z-index: 100;
        i {
          font-size: 25px;
        }
      }
      img {
        width: 100%;
      }
    }
    .fade-enter-active,
    .fade-leave-active {
      transition: opacity .5s;
    }
    .fade-enter,
    .fade-leave-to/* .fade-leave-active below version 2.1.8 */
      {
      opacity: 0;
    }
  }

</style>
