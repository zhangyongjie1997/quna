<template>
    <div class="main">
      <div class="backIcon">
        <i class="iconfont icon-fanhui pointer"></i>
      </div>
      <div class="search">
        <div class="searchCon">
          <input type="text">
          <span class="searchIcon"><i class="iconfont icon-sousuo"></i></span>
        </div>
      </div>
      <router-link to="/city">
        <div class="city">
          <span>&nbsp;&nbsp;</span>城市
          <span><i class="iconfont icon-zelvxuanzefeiyongdaosanjiaoxingfandui"></i></span>
        </div>
      </router-link>
    </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang='less'>
.main{
  box-sizing: border-box;
  padding: 2px 0;
  display: flex;
  clear: both;
  position: fixed;
  top: 0;
  min-width: 100%;
  height: 45px;
  background: #ccc;
  z-index: 10;
  .city{
    padding-right: 5px;
    color: #fff;
    font-size: 15px;
    height: 100%;
    line-height: 40px;
    margin-right: 0;
    i{
      font-size: 12px;
    }
  }
}
.backIcon{
  float: left;
  min-width: 40px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-weight: bolder;
}
.backIcon i{
  color: #fff;
  font-size: 19px;
}
.search{
  flex: 1;
  float: left;
  min-width: 65%;
  height: 30px;
  padding: 5px 0;
  .searchCon{
    background-color: #fff;
    padding: 4px 0px 4px 10px;
    height: 23px;
    line-height: 23px;
    border-radius: 10px;
    input{
      height: 20px;
      border: none;
      width: 80%;
      padding-right: 13px;
      outline: none;
    }
  }
}
</style>
