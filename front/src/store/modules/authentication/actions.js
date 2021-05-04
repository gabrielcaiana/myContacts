// import { auth } from '@/services/firebase'

// export const actions = {
//     async registerUser({commit, dispatch}, user) {
//         try {
//             const { data } = await auth.createUserWithEmailAndPassword(user.email, user.password)
//             commit('SET_USER', data)

//             return this.$router.push({ name: 'Home'})
//         } catch (err) {
//             return err
//         } finally {

//         }
//     }
// }