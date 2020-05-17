import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './auth';
import tablet from './tablet';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    auth,
    tablet
  },
  plugins: [vuexLocal.plugin]
});
