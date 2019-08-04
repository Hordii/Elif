import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hotdogs:[]
  },
  getters: {
    GET_HOTDOGS:state => {
      return state.hotdogs
    }
  },
  mutations: {
    SET_HOTDOGS(state, payload){
     state.hotdogs=payload
    }
  },
 }
);
