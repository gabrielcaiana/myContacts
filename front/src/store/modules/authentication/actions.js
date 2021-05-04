import { auth, userCollection } from '@/services/firebase';
import router from '@/router'

export const actions = {
  async registerUser({ commit }, form) {
    try {
      const { user } = await auth.createUserWithEmailAndPassword( form.email, form.password);
      commit('SET_USER', user);
      console.log(user)

      await userCollection.doc(user.uid).set({
        createdOn: new Date(),
        name: form.name,
        gender: form.gender,
        email: form.email,
        password: form.password
      })

      router.push({ name: 'Home' });
    } catch (err) {
      console.log(err)
    }
  },
};
