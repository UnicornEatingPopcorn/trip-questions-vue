<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-11
      h1.mb-3.text-center.top-margin Edit Plan № {{ id }}
      form#mainQuestions.position-relative.question-plan(@submit.prevent="createPlan")
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
           :answer="answer"
           @blur="$v.plan.answer.$touch()")
         //- p.error-message(v-if="!$v.plan.answer.required") Field is required to be filled.
       .row
         .col-6.offset-md-6
           button.btn.btn-primary.btn-block Submit
</template>

<script>
import Datepicker from "vuejs-datepicker"
import Answer from "@/components/Answer.vue"
import ClientService from "@/services/ClientService.js"
import { required } from "vuelidate/lib/validators"

export default {
  props: ["id"],
  components: {
    Datepicker,
    Answer
  },
  created() {
    ClientService.getQuestions()
      .then(response => {
        const questions = response.data
        this.plan.answers = questions.map(question => {
          const id = Math.floor(Math.random() * 10000000)

          return { question, value: "", id }
        })
      })
      .catch(error => {
        console.log("There was an error:", error.response)
      })
  },
  data() {
    return {
      plan: this.createFreshPlan()
    }
  },
  validations: {
    plan: {
      answer: { required }
    }
  },
  methods: {
    createFreshPlan() {
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        answers: []
      }
    },
    createPlan() {
      this.$store
        .dispatch("createPlan", this.plan)
        .then(() => {
          this.$router.push({
            name: "plan-list"
          })
          this.plan = this.createFreshPlan()
        })
        .catch(() => {
          console.log("There was a problem creating your plan.")
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
