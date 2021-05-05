export const mutations = {
  SET_NOTIFICATION(state, { message, success = true }) {
    state.snackbar = {
      color: success ? 'primary' : 'error',
      message,
      isVisible: true,
    };
  },
};
