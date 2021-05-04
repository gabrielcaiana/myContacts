import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const loader = {
    namespaced: true,
    state: {
        isVisible: false
    },
    mutations,
    actions,
    getters
}