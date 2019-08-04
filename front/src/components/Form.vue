<template>
  <v-layout justify-center>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Create new</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Create new HotDog</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-text-field label="Title*" v-model="title" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="add">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
    import {mapGetters} from "vuex";
    import axios from "axios";

    export default {
        name: "Form",
        data: () => ({
            dialog: false,
            title: 'Title',
            text: 'Text',
            index: 0
        }),
        methods:{
            add () {
              axios
                .post('http://localhost:3000/hotdog',{
                  data:{
                    title: this.title
                  }
                })
                .then(() => (
                  this.$store.commit('RENDER_STATUS')
                ));
            },

        }
    }
</script>

<style scoped>

</style>
