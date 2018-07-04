<template>
  <div class="main">
    <div @click="back" class="backIcon">
      <i class="iconfont icon-fanhui pointer"></i>
    </div>
    <div class="title">城市选择</div>
    <div class="search">
      <input type="text" v-model="letter" placeholder="请输入城市名或拼音">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        letter: ''
      }
    },
    components: {

    },
    methods: {
      back() {
        this.$router.go(-1);
      }
    },
    watch: {
      letter() {
        this.$emit('change',this.letter);
      }
    }
  }

</script>

<style scoped lang="less">
  .main {
    z-index: 100;
    position: fixed;
    top: 0;
    width: 100%;
    height: 85px;
    background-color: burlywood;
    .title {
      display: inline-block;
      width: 80%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      box-sizing: border-box;
      font-size: 18px;
    }
    .backIcon {
      float: left;
      min-width: 10%;
      height: 40px;
      text-align: center;
      line-height: 40px;
      font-weight: bolder;
    }
    .backIcon i {
      color: #fff;
      font-size: 19px;
    }
    .search {
      box-sizing: border-box;
      width: 90%;
      margin: 0 auto;
      background-color: #fff;
      height: 38px;
      padding: 5px 0;
      border-radius: 5px;
      input {
        display: block;
        width: 90%;
        margin: 0 auto;
        height: 23px;
        outline: none;
        border: none;
        text-align: center;
      }
    }
  }

</style>
