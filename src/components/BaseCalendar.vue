<template lang="pug">
  form
    .row
      .col-5
        label.form-text {{ label }}:
      .col-7
        datepicker(:value="date" @selected="updateValue" :bootstrap-styling="true" input-class="base-input")
</template>

<script>
import Datepicker from "vuejs-datepicker"

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      date: new Date()
    }
  },
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event)
    }
  }
}
</script>

<style lang="sass">
.datepicker-field
  width: 220px
</style>
