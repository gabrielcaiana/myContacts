import { auth, storage, userCollection } from '@/services/firebase';
import store from '@/store'

export const actions = {
  async setCurrentUser({ commit, dispatch }, user) {
    try {
      dispatch('loader/setLoader', true, { root: true });
      const currentUser = await userCollection.doc(user.uid).get();
      commit('SET_CURRENT_USER', currentUser.data());
    } catch (err) {
      console.log(err);
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },

  async updateCurrentUser({ dispatch }, user) {
    try {
      dispatch('loader/setLoader', true, { root: true });

      const userId = auth.currentUser.uid;

      let url = '';

      if (user.avatar.object && user.avatar.object != "" ) {
        const snapshot = await storage
          .ref(userId)
          .child(user.avatar.fileName)
          .put(user.avatar.object);

        url = await snapshot.ref.getDownloadURL();
      } else if (store.getters['user/$currentUser'].avatar) {
        url = store.getters['user/$currentUser'].avatar.url
      }

      let avatar = {
        url,
        fileName: user.avatar.fileName,
      }

      await userCollection.doc(userId).update({
        avatar: avatar.fileName ? avatar : "",
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
