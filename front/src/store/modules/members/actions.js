import { getMembers } from '@/services/members';

export const actions = {
  async listMembers({ commit }) {
    try {
      const { data } = await getMembers();
      commit('setMembers', data);
    } catch (err) {
      console.log(err);
    }
  },
};
