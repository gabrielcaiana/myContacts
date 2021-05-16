export const mutations = {
  SET_CONTACTS(state, payload) {
    state.contacts = payload;
  },

  SET_CURRENT_CONTACT(state, payload) {
    state.currentContact = payload
  }
};
