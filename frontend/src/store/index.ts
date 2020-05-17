import Vue from 'vue';
import Vuex from 'vuex';
import Auth from './auth';
import Order from './order';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Auth,
    Order
  }
});
