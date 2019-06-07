import Vue from "vue"
import Vuex from "vuex"
import ClientService from "@/services/ClientService.js"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    plans: [],
    plan: {},
    plansTotal: 0,
    perPage: 4
  },
  mutations: {
    ADD_PLAN(state, plan) {
      state.plans.push(plan)
    },
    UPDATE_PLAN(state, updatedPlan) {
      state.plans = state.plans.map(plan => {
        if (updatedPlan.id == plan.id) {
          return updatedPlan
        }
        return plan
      })
    },
    SET_PLANS(state, plans) {
      state.plans = plans
    },
    DELETE_PLAN(state, planId) {
      state.plans = state.plans.filter(plan => planId !== plan.id)
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
    updatePlan({ commit }, plan) {
      return ClientService.updatePlan(plan).then(response => {
        commit("UPDATE_PLAN", response.data)
      })
    },
    fetchPlans({ commit }, { page }) {
      return ClientService.getPlans(this.state.perPage, page)
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

      if (plan) {
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
    },
    deletePlan({ commit }, id) {
      return ClientService.deletePlan(id).then(() => {
        commit("DELETE_PLAN", id)
      })
    }
  },
  getters: {
    getPlanById: state => id => {
      return state.plans.find(plan => plan.id === id)
    }
  }
})
