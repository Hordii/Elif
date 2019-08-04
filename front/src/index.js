import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hotdogs:[],
    isRender:false
  },
  getters: {
    GET_HOTDOGS: state => {
      return state.hotdogs
    },

  },
  mutations: {
    SET_HOTDOGS(state, payload){
      state.hotdogs = payload;
    },
    RENDER(state, payload){
      state.isRender = payload
    },
    DELETE_HOTDOG(state, payload){
       this.state.hotdogs =state.hotdogs.filter(item =>{
        return item._id !== payload.toString()
      })
    },
    RENDER_STATUS(state){
      state.isRender.$forceUpdate()
    }
  },
 }
);
