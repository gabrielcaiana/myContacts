import { userCollection } from '@/services/firebase';

export const actions = {
  async setCurrentUser({ commit }, user) {
    try {
      const currentUser = await userCollection.doc(user.uid).get();
      commit('SET_CURRENT_USER', currentUser.data());
    } catch (err) {
      console.log(err);
    }
  },

  removeCurrentUser({ commit }, payload) {
    commit('SET_CURRENT_USER', payload);
  },
};
