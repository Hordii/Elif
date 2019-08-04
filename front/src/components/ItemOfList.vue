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
      | Press enter or blue circle for update
      v-text-field(
        label="edit"
        v-model="editText"
        @keyup.enter="edit(hotdog._id)"
      )


</template>

<script>
    import axios from "axios";

    export default {
      props:['hotdog'],
        data(){
          return{
            editText:''
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
              .then(() => (
                axios
                  .get('http://localhost:3000/hotdog',{
                  })
                  .then(response => (this.$store.commit('SET_HOTDOGS',response.data.hotdog)))
              ));
          },
          edit(index){
            axios
              .put('http://localhost:3000/hotdog',{
                data:{
                  id:index,
                  title: this.editText
                }
              })
              .then(() => (
                axios
                  .get('http://localhost:3000/hotdog',{
                  })
                  .then(response => (this.$store.commit('SET_HOTDOGS',response.data.hotdog)))
              ));
            this.editText=''
          },
      }
    }
</script>

<style scoped>

</style>
