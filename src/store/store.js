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
    createPlan({ commit }, plan) {
      return ClientService.postPlan(plan).then(() => {
        commit("ADD_PLAN", plan.data)
      })
    }
  },
  getters: {}
})
