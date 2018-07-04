<template>
  <div class="main" ref="top">
    <ul>
      <li @touchend="handleTouchEnd" @touchstart="handleTouchStart" @touchmove.prevent.stop="handleTouchMove" :ref="item" v-for="(item, index) in letter" :key="index">
        <div @click="letterClicked" class="item">{{item}}</div>
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      letter:['A','B','C','D','E','F','G','H','J','K','L','M','N','P','Q','R','S','T','W','X','Y','Z'],
      ifTouch:false,
      timer:null,
      startY:0
    }
  },
  methods:{
    handleTouchEnd(){
      this.ifTouch = false;
    },
    handleTouchStart(){
      this.ifTouch = true;
    },
    handleTouchMove(e){
      if(this.ifTouch){
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(()=>{
         const touchY = e.touches[0].clientY+155;
         let count = Math.floor((touchY - this.$refs.top.offsetTop)/20);
         console.log(count,touchY,this.$refs);
         this.$emit('letterClicked',this.letter[count]);
        },16);
      }
    },
    letterClicked(e){
      this.$emit('letterClicked',e.target.innerHTML);
    }
  }
}
</script>

<style scoped>
.main{
  position: fixed;
  right: 0;
  top: 50%;
  transform: translate(0,-35%);
  width: 20px;
  background-color: #00000000;
}
.item{
  width: 100%;
  height: 20px;
  line-height: 20px;
  text-align: center;
  font-size: 13px;
}
</style>
