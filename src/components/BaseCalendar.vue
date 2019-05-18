<template lang="pug">
  label.form-text {{ label }}
    datepicker(:value="date" @selected="updateValue" v-on="$listeners" :input-class="datepicker-field")
</template>

<script>
import Datepicker from "vuejs-datepicker"

export default {
  components: {
    Datepicker
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    value: Date,
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
