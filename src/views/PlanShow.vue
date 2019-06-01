<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-9
      h1.mb-3.text-center.top-margin Plan № {{ id }}
      form.question-plan
        h3 Answers:
        h5(v-for="answer in plan.answers" :key="answer.id") {{ answer.question.id}}. {{ answer.question.title }} : {{ answer.value }}
        .row.button_margin-top
          .col
            router-link.btn.btn-info.btn-block(:to="{ name: 'plan-edit', params: { id: plan.id } }") Edit
          .col
            button.btn.btn-info.btn-block Buy

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
