import { getContacts, putContact } from '@/services/contacts';

export const actions = {
  async listContacts({ commit, dispatch }) {
    try {
      dispatch('loader/setLoader', true, { root: true });
      const { data, status } = await getContacts();

      if (status == 200) {
        commit('SET_CONTACTS', data);
      }
    } catch (err) {
      dispatch(
        'notification/showNotification',
        { message: 'Falha ao carregar a lista de contatos', success: false },
        { root: true }
      );
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },

  showContact({ commit }, payload) {
    commit('SET_CONTACT', payload);
  },

  async updateContact({dispatch }, contact) {
    try {
      dispatch('loader/setLoader', true, { root: true });
       await putContact(contact);

       dispatch(
        'notification/showNotification',
        { message: 'Contato atualizado com sucesso!', success: true },
        { root: true })
      
    } catch (err) {
      dispatch(
        'notification/showNotification',
        { message: 'Falha ao atualizar os dados do contato', success: false },
        { root: true }
      );
    } finally {
      dispatch('loader/setLoader', false, { root: true });
    }
  },
};
