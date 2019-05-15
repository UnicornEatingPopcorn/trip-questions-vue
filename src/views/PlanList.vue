<template lang="pug">
  .col-9.text-center
    h1 Plan List
    Plan(v-for="plan in plans" :key="plan.id" :plan="plan" )

</template>

<script>
import ClientService from "@/services/ClientService.js"
import Plan from "@/components/Plan.vue"

export default {
  components: {
    Plan
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

</style>
