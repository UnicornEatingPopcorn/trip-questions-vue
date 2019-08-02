<template lang="pug">
  form
    .row
      .col-12
        .airports-dropdown
          input(type="text" @input="fuzzySearch" v-model="query" v-bind="$attrs" class="form-control base-input" @blur="$v.value.$touch()" :class="{ 'is-invalid': $v.value.$error }" :placeholder="label")
          .dropdown-items
            .dropdown-item(v-for="airport in airports" :key="airport.icao" @click="setAirport(airport)") {{ airport.name }}
              span.badge.badge-primary {{ airport.city }} {{ airport.country }}
              .sm-line
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
      query: '',
      airports: [],
      airportsFromSearch: []
    }
  },
  methods: {
    fuzzySearch() {
      ClientService.getAirportsFuzzy(this.query)
      .then(response => {
        this.airports = response.data
      })
      .catch(error => {
        console.log('There was an error:', error.response)
      })
    },
    setAirport(airport) {
      this.value = airport.id
      this.query = airport.city
      this.airports = []
    }
  }
}
</script>

<style lang="sass">
.select-input
  width: 220px

.airports-dropdown
  position: relative

.dropdown-items
  position: absolute
  top: 38px
  left: 0px
  z-index: 99
  background: white
  width: 100%

.dropdown-item
  cursor: pointer

.badge-primary
  margin-left: 10px

.sm-line
  height: 1px
  background: #b8daff8c
  width: 100%
  margin-top: 5px
</style>
