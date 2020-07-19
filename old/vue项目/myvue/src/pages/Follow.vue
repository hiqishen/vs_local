<template>
  <div class="Follow">
    <Cell
      v-for="(item,index) of follow"
      :key="item._id"
      :data="item"
      :index="index"
      api-name="follow"
    />
  </div>
</template>

<script>
  import Cell from '../components/Cell.vue'
  // import axios from '../plugins/axios.js'
  export default {
    name:'Follow',
    props:{},
    data(){
      return {
        follow:[]
      }
    },
    components:{
      Cell
    },
    mounted(){
      // this.$root.bLoading=true;
      axios({
        url:'/api/goods/follow',
        params:{_page:1,_limit:8},
      }).then(
        res=>{
          // this.$root.bLoading=false;
          this.follow = res.data.data
        }
      )
    },
    updated(){},
    methods:{}
  }
</script>

<style scoped>
  .Follow{
    margin-top: .6rem;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
  }
</style>
