import { mutations } from './mutations';
import { actions } from './actions';
import { getters } from './getters';

export const notification = {
  namespaced: true,
  state: {
    snackbar: {
        isVisible: false,
        color: '',
        message: ''
    }
  },
  mutations,
  actions,
  getters,
};
