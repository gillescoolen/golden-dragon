import Vue from 'vue';
import Vuex from 'vuex';
import auth from './auth';
import order from './order';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    order
  }
});
