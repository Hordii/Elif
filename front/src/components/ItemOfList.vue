<template lang="pug" xmlns:font-size="">
    li(class="list-item")
      v-btn(
        class="mx-2" fab dark small color="red"
        width="15px"
        height="15px"
        @click="remove(hotdog._id)"
      ) -
      |{{hotdog.title}}
      |
      v-btn(
        class="ma-2" outlined large fab color="indigo"
        width="15px"
        height="15px"
        @click="edit(hotdog._id)"
      )
         v-icon

</template>

<script>

    import axios from "axios";

    export default {
      props:['hotdog'],
        data(){
          return{
          }
        },
      methods: {
          remove(index){
            axios
              .delete('http://localhost:3000/hotdog',{
                  data:{
                    id:index
                  }
              })
              .then(response => (
                this.$store.commit('DELETE_HOTDOG', index)
              ));
          },
          edit(index){
            axios
              .put('http://localhost:3000/hotdog',{
                data:{
                  id:index,
                  title:'upd_title'
                }
              })
              .then(response => (response));
          },
      }
    }
</script>

<style scoped>

</style>
