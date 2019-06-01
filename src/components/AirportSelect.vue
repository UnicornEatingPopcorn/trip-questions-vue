<template lang="pug">
  form
    .row
      .col-5
        label(v-if="label") {{ label }}:
      .col-7
        select(@change="updateValue" v-bind="$attrs" class="form-control base-input")
          option(
            v-for="airport in airports"
            :value="airport.city"
            :key="airport.icao"
            :selected="airport.city === value") {{ airport.icao }}, {{ airport.city }}
</template>

<script>
import ClientService from "@/services/ClientService.js"

export default {
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
      airports: []
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
