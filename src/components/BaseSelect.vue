<template lang="pug">
  label(v-if="label") {{ label }}
    select(@change="updateValue" v-bind="$attrs" v-on="$listeners" class="form-control")
      option(
        v-for="option in options"
        :value="option.id"
        :key="option.id"
        :selected="option === value") {{ option.name }}
</template>

<script>
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
      this.$emit("input", event.target.value)
    }
  }
}
</script>

<style lang="sass">
.select-input
  width: 220px
</style>
