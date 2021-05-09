import { getContacts } from '@/services/contacts';

export const actions = {
  async listContacts({ commit, dispatch }) {
    try {
      dispatch('loader/setLoader', true, { root: true });
      const { data, status } = await getContacts();

      if (status == 200) {
        commit('SET_CONTACTS', data);
      }
    } catch (err) {
      dispatch('notification/showNotification', {message: 'Falha ao carregar a lista de contatos', success: false }, {root: true})
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },
};
