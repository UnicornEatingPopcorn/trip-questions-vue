<template lang="pug">
  form
    .row
      .col-5
        label(v-if="label") {{ label }}:
      .col-7
        input(type="text" @input="updateValue" v-bind="$attrs" class="form-control base-input" @blur="$v.value.$touch()" :class="{ 'is-invalid': $v.value.$error }")
          //- option(
          //-   v-for="airport in airports"
          //-   :value="airport.city"
          //-   :key="airport.icao"
          //-   :selected="airport.city === value") {{ airport.icao }}, {{ airport.city }}
        template(v-if="$v.value.$error")
          p.error-message(v-if="!$v.value.required") Field is required to be filled.
</template>

<script>
import ClientService from "@/services/ClientService.js"
import { required } from "vuelidate/lib/validators"
// import vSelect from 'vue-select'

export default {
  // components: {
  //   vSelect
  // },
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
    placeholder: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      airports: [],
      airportsFromSearch: []
    }
  },
  created() {
   ClientService.getAirports()
      .then(response => {
        this.airports = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value)
    }
  }
}
</script>

<style lang="sass">
.select-input
  width: 220px
</style>
