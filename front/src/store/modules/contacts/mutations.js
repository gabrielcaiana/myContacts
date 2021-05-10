export const mutations = {
  SET_CONTACTS(state, payload) {
    state.contacts = payload;
  },

  SET_CONTACT(state, payload) {
    state.contactSelected = payload;
  }
};
