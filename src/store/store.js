import Vue from "vue"
import Vuex from "vuex"
import ClientService from "@/services/ClientService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plans: []
  },
  mutations: {
    ADD_PLAN(state, plan) {
      state.plans.push(plan)
    }
  },
  actions: {
    CREATE_PLAN({ commit }, plan) {
      ClientService.postPlan(plan)
      commit("ADD_PLAN", plan)
    }
  },
  getters: {}
})
