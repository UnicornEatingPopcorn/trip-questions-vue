<template lang="pug">
.container
  .row.justify-content-center.mt-5
    .col-9
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
           button.btn.btn-primary.btn-block(v-if="step === 2" @click.prevent="") Submit



</template>

<script>
import Datepicker from "vuejs-datepicker"
import Question from "@/components/Question.vue"
import QuestionService from "@/services/QuestionService.js"

export default {
  components: {
    Datepicker,
    Question
  },
  created() {
    QuestionService.getQuestions()
      .then(response => {
        this.questions = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  data() {
    return {
      options: [ '1', '2', '3', '4', '5', '6+' ],
      step: 1,
      maxStep: 2,
      questions: []
    }
  },
  methods: {
    createEvent() {
      this.$store
        .dispatch('event/createEvent', this.event)
        .then(() => {
          this.$router.push({
            name: 'event-show',
            params: { id: this.event.id }
          })
          this.event = this.createFreshEventObject()
        })
        .catch(() => {
        })
    },
    createFreshEventObject() {
      const user = this.$store.state.user.user
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        user: user,
        category: '',
        organizer: user,
        title: '',
        description: '',
        location: '',
        date: '',
        time: '',
        attendees: []
      }
    }
  }
}

</script>

<style lang="sass">
.field
  margin-bottom: 24px

.question-plan
  background-color: #82CFFD
  border-radius: 1%
  padding: 20px
  margin-top: 83px

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
