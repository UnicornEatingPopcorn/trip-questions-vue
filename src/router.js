import Vue from "vue"
import Router from "vue-router"
import PlanCreate from "./views/PlanCreate.vue"
import PlanList from "./views/PlanList.vue"
import PlanShow from "./views/PlanShow.vue"
import PlanEdit from "./views/PlanEdit.vue"

Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "plan-create",
      component: PlanCreate
    },
    {
      path: "/plans",
      name: "plan-list",
      component: PlanList
    },
    {
      path: "/plan-show/:id",
      name: "plan-show",
      component: PlanShow,
      props: true
    },
    {
      path: "/plan-edit/:id",
      name: "plan-edit",
      component: PlanEdit,
      props: true
    }
  ]
})
