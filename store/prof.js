
export const state = {
  showData: [],
  // info:'init'
}

export const mutations = {
  open(state,payload){
    state.showData = payload
    // state.info = 'prof'
  }
}
export const actions = {
  open({commit}, payload){
    commit('open',payload)
  }
}

