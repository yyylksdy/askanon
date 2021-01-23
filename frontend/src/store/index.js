// import dependency to handle HTTP request to our back end
import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
// to handle state
const state = {
  queries: []
}

// to handle state
const getters = {}

// to handle actions
const actions = {
  getAllQueries ({ commit }) {
    axios
      .get(process.env.API_URL)
      .then(response => response.data)
      .then(queries => {
        commit('SET_QUERIES', queries)
      })
  }
}

// to handle mutations
const mutations = {
  SET_QUERIES (state, queries) {
    state.queries = queries
  }
}

// export store module
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
