import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export const members = {
  namespaced: true,
  state: {
    members: null,
  },
  mutations,
  actions,
  getters,
};
