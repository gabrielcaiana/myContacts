import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export const authentication = {
  namespaced: true,
  state: {
    user: null,
  },
  mutations,
  actions,
  getters,
};
