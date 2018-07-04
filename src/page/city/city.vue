<template>
  <div class="main">
    <city-header @change="letterChange"></city-header>
    <list :letter="letter" v-if="!ifSearch" :hots="hotCities" :cities="cities"></list>
    <search :cities="someCities" v-if="ifSearch"></search>
    <letter @letterClicked="letterChanged"></letter>
  </div>
</template>

<script type="text/ecmascript-6">
import cityHeader from './components/header.vue';
import list from './components/list.vue';
import search from './components/search.vue';
import letter from './components/letter.vue';
import axios from 'Axios';
export default {
  data() {
    return {
      cities:{},
      hotCities:[],
      someCities:[],
      ifSearch:false,
      timer:null,
      letter:''
    }
  },
  mounted(){
    this.getCityInfo();
  },
  methods:{
    letterChanged(val){
      this.letter = val;
    },
    findCity(val){
      for(let key in this.cities){
        this.cities[key].forEach(item => {
          if(item.spell.indexOf(val) > -1 || item.name.indexOf(val) > -1){
            this.someCities.push(item);
          }
        });
      }
      this.ifSearch = true;
    },
    letterChange(letter){
      if(letter == ''){
        this.someCities = [];
        this.ifSearch = false;
      }else{
        this.someCities = [];
        if(this.timer){
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(()=>{
          this.findCity(letter);
        },100);
      }
    },
    getCityInfo(){
      axios.get('/static/city.json').then(this.initCityInfo);
    },
    initCityInfo(res){
      this.cities = res.data.data.cities;
      this.hotCities = res.data.data.hotCities;
    }
  },
  components: {
    cityHeader,list,search,letter
  }
}
</script>

<style scoped>
</style>
