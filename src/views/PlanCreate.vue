<template lang="pug">
.container.purple-content
  .row.justify-content-center
    .col-9
      h1.mb-3.text-center.top-margin Create Plan
      form#mainQuestions.position-relative.question-plan
       .row.form-group
         .col-12.text-center
           h5.font-alt.form-text
             |  Let's start with few simple questions
           //- img.fluid-grow(src="@/assets/smile.png" height="100px", width="100px")
           .line
       .row.mb-3
         Question(v-for="question in questions" :key="question.id" :question="question" :step="step")
       .row
         .col
           button.btn.btn-info.btn-block(v-if="step === 1" @click.prevent="step += 1") Next
           button.btn.btn-info.btn-block(v-if="step === 2" @click.prevent="step -= 1") Prev
         .col
           button.btn.btn-primary.btn-block(v-if="step === 2" @submit.prevent="createAnswer") Submit



</template>

<script>
import Datepicker from "vuejs-datepicker"
import Question from "@/components/Question.vue"
import ClientService from "@/services/ClientService.js"

export default {
  components: {
    Datepicker,
    Question
  },
  created() {
    ClientService.getQuestions()
      .then(response => {
        this.questions = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  data() {
    return {
      step: 1,
      questions: [],
    }
  },
  methods: {}
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

.question-plan
  background-color: #BAE5FE
  border-radius: 1%
  padding: 20px
  border: solid 2px #C0C5FE
  margin-top: 50px

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

.top-margin
  margin-top: 70px

.purple-content
  height: 100%
  background-color: #8d95fdc4

</style>
