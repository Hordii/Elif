import Vue from 'vue'
import App from './App.vue'
import {store} from "./index";
import vuetify from './plugins/vuetify';

import List from './components/List'



new Vue({
  el: '#app',
  store,
  vuetify,
  render: h => h(App)
});
