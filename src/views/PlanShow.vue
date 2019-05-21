<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-9
      h1 Plan № {{ id }}
</template>

<script>
import ClientService from "@/services/ClientService.js"

export default {
  props: ['id'],
  data() {
    return {
      plan: {}
    }
  },
  created() {
    ClientService.getPlan(this.id)
      .then(response => {
        this.plan = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  }
}
</script>

<style lang="sass">

</style>
