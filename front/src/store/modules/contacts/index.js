import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export const contacts = {
  namespaced: true,
  state: {
    contacts: null,
  },
  mutations,
  actions,
  getters,
};
