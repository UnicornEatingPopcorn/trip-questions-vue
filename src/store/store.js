import Vue from "vue"
import Vuex from "vuex"
import ClientService from "@/services/ClientService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [],
    answers: []
  },
  mutations: {
    ADD_ANSWER(state, answer) {
      state.answers.push(answer)
    }
  },
  actions: {
    CREATE_ANSWER({ commit }, answer) {
      ClientService.postQuestion(answer)
      commit("ADD_ANSWER", answer)
    }
  },
  getters: {}
})
