<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-11
      h1.mb-3.text-center.top-margin Edit Plan № {{ id }}
      form#mainQuestions.position-relative.question-plan(@submit.prevent="updatePlan")
       .row.form-group
         .col-12.text-center
           h5.font-alt.form-text
             |  Check your answers, please
           //- img.fluid-grow(src="@/assets/smile.png" height="100px", width="100px")
           .line
       .row.mb-3
         Answer(
           v-for="answer in plan.answers"
           :key="answer.question.id"
           :answer="answer")
       .row
         .col-6.offset-md-6
           button.btn.btn-primary.btn-block Submit
</template>

<script>
import Answer from "@/components/Answer.vue"
import { mapState } from "vuex"

export default {
  computed: mapState(["plan"]),
  props: ["id"],
  components: {
    Answer
  },
  created() {
    this.$store.dispatch("fetchPlan", this.id)
  },
  methods: {
    updatePlan() {
      this.$store
        .dispatch("updatePlan", this.plan)
        .then(() => {
          this.$router.push({
            name: "plan-list"
          })
        })
        .catch(() => {
          console.log("There was a problem updating your plan.")
        })
    }
  }
}
</script>

<style lang="sass">
h1
  color: #BAE5FE

.btn:hover
  transform: scale(1.03)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)

.field
  margin-bottom: 24px

.btn-plan
  background-color: #2aabf7 !important
  margin-top: 20px
  width: 220px

.form-text
  color: #000000e3

.line
  width: 400px
  height: 3px
  background: #0F1886
  margin: 0 auto

</style>
