import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import auth from './auth';
import site from './site';
import tablet from './tablet';

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  modules: {
    auth,
    site,
    tablet
  },
  plugins: [vuexLocal.plugin]
});
