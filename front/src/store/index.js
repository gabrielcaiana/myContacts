import Vue from 'vue';
import Vuex from 'vuex';

import { authentication } from './modules/authentication';
import { loader } from './modules/loader'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    authentication,
    loader
  },
});

export default store;
