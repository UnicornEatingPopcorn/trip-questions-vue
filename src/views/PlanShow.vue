<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-9
      h1 Plan № {{ id }}
      h2 Answers:
      h3(v-for="answer in plan.answers" :key="answer.id") {{ answer.question.title }} : {{ answer.value }}
</template>

<script>
import { mapState } from "vuex"

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchPlan", this.id)
  },
  computed: mapState(["plan"])
 }
</script>

<style lang="sass"></style>
