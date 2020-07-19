<template>
  <div class="Home">
    
    <swiper
      :data="list"
      apiName="banner"
    />
    
    <div class="home-m-l-r">
      <!-- <Cell :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
      <!-- <Cell :index="0" :data="{_id:2342343,title:'啥地方',des:'撒打发斯蒂芬'}"/> -->
      <Cell
        v-for="(item,index) of home"
        :key="item._id"
        :data="item"
        :index="index"
        api-name="home"
      />
    </div>
    
    
  </div>
</template>

<script>
  import swiper from '../components/swiper.vue'
  import Cell from '../components/Cell.vue'
  export default {
    name:'Home',
    props:{},
    data(){
      return {
        list:[],
        home:[]
      }
    },
    components:{
      swiper,Cell
    },
    mounted(){
      axios({
        url:'/api/goods/banner',
        params:{_page:1,_limit:3},
      }).then(
        res=>this.list = res.data.data
      )
      
      axios({
        url:'/api/goods/home',
        params:{_page:1,_limit:10},
      }).then(
        res=>this.home = res.data.data
      )
      
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Home{
    /* background: #999999; */
  }
  .home-m-l-r{
    margin: 0 0.4rem;
  }
</style>
