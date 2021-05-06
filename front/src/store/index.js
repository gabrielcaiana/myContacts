import Vue from 'vue';
import Vuex from 'vuex';

import { authentication } from './modules/authentication';
import { loader } from './modules/loader'
import { notification } from './modules/notification'
import  { user } from './modules/user'

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    authentication,
    loader,
    notification,
    user
  },
});

export default store;
