<template lang="pug">
.container
  .row.justify-content-center.mt-5
    .col-9.text-center
      b-form#mainQuestions.position-relative.question-plan
       .row.form-group
         .col-12
           h5.font-alt.form-text
             |  Let's start with few simple questions
           //- img.fluid-grow(src="@/assets/smile.png" height="100px", width="100px")
           .line
           br
       .row.form-group
         .col-6
           label.form-text From
           input#arrival-place.form-control(rows="1", placeholder="Arrival city")
         .col-6
           label.form-text To
           input#departure-place.form-control(rows="1", placeholder="Departure city")
       br
       .row.form-group
         .col-6
           label.form-text(for="input-with-list") How many people?
           b-form-input(list="input-list" id="travelers-quantity" placeholder="Travelers quantity")
           b-form-datalist(id="input-list", :options="options")
         .col-6
           label.form-text There and back?
           select#there-and-back.form-control
             option Return
             option One way
       br
       .row.form-group
         .col-6
           label.form-text When to go
           datepicker#start-end-dates(placeholder="Choose from the calendar")
         .col-6
           label.form-text Return date
           datepicker#start-end-dates(placeholder="Choose from the calendar")

       .row.form-group
         .col-12
           button.btn.btn-success.left-button(type="button") Prev
           button.btn.btn-success.right-button Next

</template>

<script>
import Datepicker from "vuejs-datepicker"

export default {
  components: {
    Datepicker
  },
  data() {
    return {
      options: [ '1', '2', '3', '4', '5', '6+' ]
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

.form-text
  color: white

.line
  width: 300px;
  height: 2px;
  background: #dc3545
  margin: 0 auto

</style>
