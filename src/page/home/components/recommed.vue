<template>
  <div>
    <div class="label">热销推荐</div>
    <div class="main" ref="wrapper">
      <ul>
        <li v-for="(recommed, index) in recommeds" :key="index" class="item">
          <img :src="recommed.imgUrl" alt="">
          <div class="itemInfo">
            <span>{{recommed.title}}</span>
            <p>{{recommed.desc}}</p>
            <div class="btn">查看详情</div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    recommeds:Array
  },
  data() {
    return {

    }
  },
  mounted() {

  }
}
</script>

<style scoped lang='less'>
.label{
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  background-color: #ddd;
  line-height: 35px;
  font-size: 13px;
  padding-left: 20px;
  color: #333;
}
.main{
  box-sizing: border-box;
  width: 100%;
  padding: 5px;
}
.item{

}
.item img{
  width: 22%;
}
.itemInfo{
  display: inline-block;
  box-sizing: border-box;
  padding: 5px;
  width: 75%;
  vertical-align: top;
  p{
    line-height: 20px;
    font-size: 13px;
    color: #999;
  }
  .btn{
    display: inline-block;
    width: 30%;
    height: 20px;
    line-height: 20px;
    text-align: center;
    border-radius: 5px;
    background-color: rgb(243, 220, 18);
    font-size: 12px;
    color: #fff;
  }
}
</style>
