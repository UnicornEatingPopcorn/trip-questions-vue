<template lang="pug">
  label.form-text {{ label }}
    datepicker(:value="date" @selected="updateValue" v-on="$listeners" :bootstrap-styling="true")
</template>

<script>
import Datepicker from "vuejs-datepicker"

export default {
  components: {
    Datepicker
  },
  data () {
    return {
      value: Date
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
      this.$emit("input", event.target.value)
    }
  }
}
</script>

<style lang="sass">
.datepicker-field
  width: 220px
</style>
