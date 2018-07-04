<template>
  <div class="list">
    <div class="title">搜索结果</div>
    <ul>
      <li class="city" v-for="item of cities" :key="item.id">{{item.name}}</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props:{
      cities:Array
    },
    data() {
      return {

      }
    },
    components: {
      
    }
  }

</script>

<style scoped lang="less">
  .list {
    margin-top: 85px;
    ul{
      margin-top: 110px;
    }
    .title {
      position: fixed;
      top: 85px;
      box-sizing: border-box;
      padding: 0 10px;
      line-height: 25px;
      font-size: 13px;
      color: #000;
      height: 25px;
      width: 100%;
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

</style>
