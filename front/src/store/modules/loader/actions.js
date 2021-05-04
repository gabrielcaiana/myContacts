export const actions = {
  setLoader({ commit }, payload) {
    commit('SET_LOADER', payload);
    console.log('chegou aqui')
  },
};
