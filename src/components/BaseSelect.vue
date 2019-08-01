<template lang="pug">
  form
    .row
      .col-12
        select(@change="updateValue" v-bind="$attrs" class="form-control base-input" @blur="$v.value.$touch()" :class="{ 'is-invalid': $v.value.$error }")
          option {{ label }}
          option(
            v-for="option in options"
            :key="option.value"
            :value="option.value"
            :selected="option.value === null") {{ option.name }}
        template(v-if="$v.value.$error")
          p.error-message(v-if="!$v.value.required") Field is required to be filled.
</template>

<script>
import { required } from "vuelidate/lib/validators"

export default {
  validations: {
    value: { required }
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: {
      type: [Number, String]
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: ""
    }
  },
  methods: {
    updateValue(event) {
      this.value = event.target.value
    }
  }
}
</script>

<style lang="sass">
.select-input
  width: 220px
</style>
