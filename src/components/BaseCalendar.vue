<template lang="pug">
  form-group
    label.form-text {{ label }}
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
