import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export const user = {
  namespaced: true,
  state: {
    currentUser: {},
  },
  mutations,
  actions,
  getters,
};
