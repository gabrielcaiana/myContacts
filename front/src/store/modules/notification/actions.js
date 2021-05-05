export const actions = {
  showNotification({ commit, state }, { message, success = true }) {
    commit('SET_NOTIFICATION', { message, success });
    setTimeout(() => {
      state.snackbar.isVisible = false;
    }, 3000);
  },
};
