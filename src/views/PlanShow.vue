<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-9
      h1.mb-3.text-center.top-margin Plan № {{ id }}
      form.question-plan
        h3 Answers:
        h5(v-for="answer in plan.answers" :key="answer.id") {{ answer.question.id}}. {{ answer.question.title }} : {{ formatAnswerValue(answer.question, answer.value) }}
        .row.button_margin-top
          .col
            router-link.btn.btn-info.btn-block(:to="{ name: 'plan-edit', params: { id: plan.id } }") Edit
          .col
            a.btn.btn-danger.btn-block(@click="deletePlan") Delete

</template>

<script>
import { mapState } from "vuex"

export default {
  props: ["id"],
  created() {
    this.$store.dispatch("fetchPlan", this.id)
  },
  computed: mapState(["plan"]),
  methods: {
    formatAnswerValue(question, value) {
      if (question.component === "BaseCalendar" && value != "") {
        return new Date(value).toDateString()
      } else if (question.component === "BaseSelect") {
        const selectedOption = question.select_options.find(option => {
          return option.id == value
        })
        if (selectedOption) {
          return selectedOption.name
        }
      } else {
        return value
      }
    },
    deletePlan() {
      this.$store
        .dispatch("deletePlan", this.id)
        .then(() => {
          this.$router.push({
            name: "plan-list"
          })
        })
        .catch(() => {
          console.log("There was a problem creating your plan.")
        })
    }
  }
}
</script>

<style lang="sass"></style>
