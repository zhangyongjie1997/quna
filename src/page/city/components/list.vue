<template>
  <div class="main" ref="wrapper">
    <div class="sc">
      <div class="nowCity">
        <div class="title">当前城市</div>
        <div class="content">
          <div class="city">
            城市
          </div>
        </div>
      </div>
      <div class="nowCity">
        <div class="title">热门城市</div>
        <div class="content">
          <div class="city" v-for="(hot, index) in hots" :key="index">
            {{hot.name}}
          </div>
        </div>
      </div>
      <div class="list">
        <div v-for="(city, key) of cities" :key="key" :ref="key">
          <div class="title" :ref="key">{{key}}</div>
          <ul>
            <li class="city" v-for="item of city" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll';
  export default {
    props: {
      hots: Array,
      cities: Object,
      letter: String
    },
    mounted() {
      // this.$nextTick(() => {
      //   this.scroll = new BScroll(this.$refs.wrapper);
      // })
    },
    watch: {
      letter() {
        if (this.letter) {
          const element = this.$refs[this.letter][0];
          document.documentElement.scrollTop = element.offsetTop-85;
        }
      }
    }
  }

</script>

<style scoped lang="less">
  .main {
    margin-top: 85px;
    width: 100%;
    box-sizing: border-box;
    .list {
      .title {
        box-sizing: border-box;
        padding: 0 10px;
        line-height: 25px;
        font-size: 13px;
        color: #000;
        height: 25px;
        background-color: #ccc;
      }
      .city {
        line-height: 40px;
        padding-left: 15px;
        font-size: 15px;
        height: 40px;
        border-bottom: 1px solid #ddd;
      }
    }
    .title {
      box-sizing: border-box;
      padding: 0 10px;
      line-height: 25px;
      font-size: 13px;
      color: #fff;
      height: 25px;
      background-color: #ccc;
    }
    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding: 10px 10px 0 10px;
      .city {
        margin-bottom: 5px;
        width: 30%;
        height: 25px;
        border-radius: 5px;
        line-height: 25px;
        text-align: center;
        border: 1px solid #666;
      }
    }
  }

</style>
