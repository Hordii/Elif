import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    hotdogs:[],
    context:''
  },
  getters: {},
  mutations: {
    SET_CONTEXT(state, payload){
      state.context = payload;
    },
    FORCE_UPDATE(state){
      state.context.$forceUpdate()
    }
  },
 }
);
