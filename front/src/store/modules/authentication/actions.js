import { auth, userCollection } from '@/services/firebase';
import router from '@/router';

export const actions = {
  async registerUser({ commit, dispatch }, form) {
    try {
      dispatch('loader/setLoader', true, { root: true });
      const { user } = await auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      commit('SET_USER', user);

      await userCollection.doc(user.uid).set({
        createdOn: new Date(),
        name: form.name,
        gender: form.gender,
        email: form.email,
        password: form.password,
        userId: user.uid,
      });

      router.push({ name: 'Home' });
      dispatch('notification/showNotification', {message: 'Cadastro efetuado com sucesso!'}, {root: true})
    } catch (err) {
      console.log(err);
      dispatch('notification/showNotification', {message: 'Falha ao realizar o cadastro.', success: false }, {root: true})
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },

  async login({ commit, dispatch }, form) {
    try {
      dispatch('loader/setLoader', true, { root: true });
      const { user } = await auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );
      const currentUser = await userCollection.doc(user.uid).get();
      console.log(currentUser.data());
      commit('SET_USER', currentUser.data());
      router.push({ name: 'Home' });

      dispatch('notification/showNotification', {message: 'Login efetuado com sucesso'}, {root: true})
    } catch (err) {
      console.log(err);
      dispatch('notification/showNotification', {message: 'Falha ao efetuar o login', success: false }, {root: true})
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },

  async resetPassword({dispatch}, email) {
    try {
      dispatch('loader/setLoader', true, { root: true });
      await auth.sendPasswordResetEmail(email);
      dispatch('notification/showNotification', {message: 'E-mail enviado com sucesso!'}, {root: true})
    } catch (err) {
      console.log(err);
      dispatch('notification/showNotification', {message: 'Falha ao enviar o email.', success: false }, {root: true})
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },
};
