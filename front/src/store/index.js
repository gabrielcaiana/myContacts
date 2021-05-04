import Vue from "vue";
import Vuex from "vuex";

import { authentication } from './modules/authentication'
import { members } from './modules/members'

Vue.use(Vuex);

const store = new Vuex.Store({
  authentication,
  members
});

export default store
