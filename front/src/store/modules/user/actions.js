import { storage, auth, userCollection } from '@/services/firebase';

export const actions = {
  async setCurrentUser({ commit }, user) {
    try {
      const currentUser = await userCollection.doc(user.uid).get();
      commit('SET_CURRENT_USER', currentUser.data());
    } catch (err) {
      console.log(err);
    }
  },

  async updateCurrentUser({ dispatch }, user) {
    try {
      dispatch('loader/setLoader', true, { root: true });

      const userId = auth.currentUser.uid;

      let url = ''

      if(user.avatar) {
        const snapshot = await storage
        .ref(userId)
        .child(user.avatar.fileName)
        .put(user.avatar.object)

         url = await snapshot.ref.getDownloadURL()
      }

      await userCollection.doc(userId).update({
        avatar: url,
        name: user.name,
        gender: user.gender,
      });

      dispatch('setCurrentUser', { uid: userId });

      dispatch(
        'notification/showNotification',
        { message: 'Informações alteradas com sucesso!' },
        { root: true }
      );
    } catch (err) {
      console.log(err);
      dispatch(
        'notification/showNotification',
        { message: 'Falha ao salvar as alterações.', success: false },
        { root: true }
      );
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },

  removeCurrentUser({ commit }, payload) {
    commit('SET_CURRENT_USER', payload);
  },
};
