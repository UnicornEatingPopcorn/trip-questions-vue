<template lang="pug">
.container
  .row.justify-content-center.mt-5
    .col-9.text-center
      form#mainQuestions.position-relative.question-plan
       .row.form-group
         .col-12
           h5.font-alt.form-text
             |  Let's start with few simple questions
           //- img.fluid-grow(src="@/assets/smile.png" height="100px", width="100px")
           .line
       .row
         Question(v-for="question in questions" :key="question.id" :question="question" :step="step")
       .row.form-group
         .col-4.offset-2
           button.btn.btn-success.left-button(type="button" v-if="step != 1" @click.prevent="step -= 1") Prev
         .col-4
           button.btn.btn-success.right-button(@click.prevent="step += 1" v-if="step < maxStep") Next

</template>

<script>
import Datepicker from "vuejs-datepicker"
import Question from "@/components/Question.vue"

export default {
  components: {
    Datepicker,
    Question
  },
  data() {
    return {
      options: [ '1', '2', '3', '4', '5', '6+' ],
      step: 1,
      maxStep: 3
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
  background-color: #721c24d6
  border-radius: 1%
  padding: 20px
  margin-top: 40px

.left-button
  margin-right: 40px
  margin-top: 20px

.right-button
  margin-top: 20px
  margin-left: 40px

.form-text
  color: white

.line
  width: 300px;
  height: 2px;
  background: #dc3545
  margin: 0 auto

</style>
