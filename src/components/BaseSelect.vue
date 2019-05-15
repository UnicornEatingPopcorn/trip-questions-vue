<template lang="pug">
  label(v-if="label") {{ label }}
    select(:value="value" @change="updateValue" v-bind="$attrs" v-on="$listeners")
      option(v-for="option in options" :value="option" :key="option.id" :selected="option === value") {{ option }}
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: [String, Number],
    options: {
      type: Array,
      required: true
    }
  },
  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>
