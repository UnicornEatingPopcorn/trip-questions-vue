<template lang="pug">
.plan-create-container
  .columns
    .column.is-6.is-offset-3
      form#mainQuestions.question-plan(@submit.prevent="createPlan")
        p.plan-create-container__title Let's start with few simple questions
        .plan-create-container__line
        .columns.is-multiline
           Answer(
             v-for="answer in plan.answers"
             :key="answer.question.id"
             :answer="answer")
        .columns
          .column.plan-create-container__button
            button.button.is-black Submit
</template>

<script>
import Datepicker from "vuejs-datepicker"
import Answer from "@/components/Answer.vue"
import ClientService from "@/services/ClientService.js"

export default {
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
        .dispatch("createPlan", this.planForAPI())
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
  },
  computed: {
    planForAPI() {
      return {
        plan: {
          answers: this.plan.answers.map(answer => {
            return { question_id: answer.question.id, value: answer.value }
          })
        }
      }
    }
  }
}
</script>

<style lang="sass">
.plan-create-container
  display: flex
  justify-content: center
  align-items: center
  height: calc(100vh - 120px)

  &__title
    font-size: 18px
    color: white
    display: flex
    justify-content: center

  &__line
    width: 100%
    height: 1px
    background: #f7b944
    display: inline-block

  &__button
    display: flex !important
    justify-content: center

.button:hover
  transform: scale(1.03)
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19)
</style>
