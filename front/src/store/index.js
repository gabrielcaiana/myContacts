import Vue from 'vue';
import Vuex from 'vuex';

import { authentication } from './modules/authentication';
import { loader } from './modules/loader'
import { notification } from './modules/notification'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    authentication,
    loader,
    notification
  },
});

export default store;
