import { auth, userCollection } from '@/services/firebase';
import router from '@/router';

export const actions = {
  async registerUser({ commit }, form) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        form.email,
        form.password
      );
      commit('SET_USER', user);
      console.log(user);

      await userCollection.doc(user.uid).set({
        createdOn: new Date(),
        name: form.name,
        gender: form.gender,
        email: form.email,
        password: form.password,
        userId: user.uid,
      });

      router.push({ name: 'Home' });
    } catch (err) {
      console.log(err);
    }
  },

  async login({ commit }, form) {
    try {
      const { user } = await auth.signInWithEmailAndPassword(
        form.email,
        form.password
      );

      //   const currentUser = await userCollection.where("userId", "==", user.uid).get()
      const currentUser = await userCollection.doc(user.uid).get();
      console.log(currentUser.data());

      commit('SET_USER', currentUser.data());
      router.push({ name: 'Home' });
    } catch (err) {
      console.log(err);
    }
  },
};
