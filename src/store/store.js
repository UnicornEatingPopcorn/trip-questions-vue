import Vue from "vue"
import Vuex from "vuex"
import ClientService from "@/services/ClientService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plans: [],
    plan: {},
    plansTotal: 0
  },
  mutations: {
    ADD_PLAN(state, plan) {
      state.plans.push(plan)
    },
    SET_PLANS(state, plans) {
      state.plans = plans
    },
    SET_PLAN(state, plan) {
      state.plan = plan
    },
    SET_PLANS_TOTAL(state, plansTotal) {
      state.plansTotal = plansTotal
    }
  },
  actions: {
    createPlan({ commit }, plan) {
      return ClientService.postPlan(plan).then(() => {
        commit("ADD_PLAN", plan.data)
      })
    },
    fetchPlans({ commit }, { perPage, page }) {
      ClientService.getPlans(perPage, page)
        .then(response => {
          commit("SET_PLANS_TOTAL", parseInt(response.headers["x-total-count"]))
          commit("SET_PLANS", response.data)
        })
        .catch(error => {
          console.log("There was an error:", error.response)
        })
    },
    fetchPlan({ commit, getters }, id) {
      var plan = getters.getPlanById(id)

      if (event) {
        commit("SET_PLAN", plan)
      } else {
        ClientService.getPlan(id)
          .then(response => {
            commit("SET_PLAN", response.data)
          })
          .catch(error => {
            console.log("There was an error:", error.response)
          })
      }
    }
  },
  getters: {
    getPlanById: state => id => {
      return state.plans.find(plan => plan.id === id)
    }
  }
})
