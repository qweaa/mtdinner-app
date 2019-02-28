
import { GetRules } from '@/api/rules'

const base = {
  state: {
    rules: ''
  },

  mutations: {
    SET_RULES: (state, rules) => {
      state.rules = rules
    },
  },

  actions: {
    // 存储规则
    GetRules({ commit }) {
        return new Promise((resolve, reject) => {
            GetRules().then(response => {
                commit('SET_RULES', response.data)
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
  }
}

export default base
