<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-9
      h1 Plan № {{ id }}
      h2 Answers:
      h3(v-for="answer in plan.answers" :key="answer.id") {{ answer.question.title }} : {{ answer.value }}
</template>

<script>
import ClientService from "@/services/ClientService.js"

export default {
  props: ["id"],
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
        console.log("There was an error:", error.response)
      })
  }
}
</script>

<style lang="sass"></style>
