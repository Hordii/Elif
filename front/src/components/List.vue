<template lang="pug">
  div(class="main-div")
    ul(class="ul-without-symbol")
      ItemOfList(
        v-for="hotdog in hotdogs"
        :hotdog="hotdog"
        :key="hotdog.index"
      )
</template>

<script>
  import ItemOfList from "./ItemOfList";
  import axios from 'axios'
    export default {
      components:{
        ItemOfList
      },
      name: "List",
      data(){
          return{
            hotdogs:[],

          }
      },
      mounted() {
        this.$store.commit('SET_CONTEXT', this)
        axios
          .get('http://localhost:3000/hotdog',{
          })
          .then(response => (this.hotdogs = response.data.hotdog ));

      }
    }
</script>

<style scoped>
  .main-div{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .ul-without-symbol{
    list-style: none;
    margin-bottom: 15px;

  }
</style>
