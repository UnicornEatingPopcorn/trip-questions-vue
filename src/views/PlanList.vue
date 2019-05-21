<template lang="pug">
.container.purple-content.top-padding
  .col-8.text-center.col-margin
    h1.mb-5 Plan List
    PlanCard.mt-2(v-for="plan in plans" :key="plan.id" :plan="plan")
</template>

<script>
import ClientService from "@/services/ClientService.js"
import PlanCard from "@/components/PlanCard.vue"

export default {
  props: {
    plan: Object
  },
  components: {
    PlanCard
  },
  data() {
    return {
      plans: []
    }
  },
  created() {
    ClientService.getPlans()
      .then(response => {
        this.plans = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style lang="sass">
.top-padding
  padding-top: 70px

.col-margin
  margin: 0 auto

</style>
