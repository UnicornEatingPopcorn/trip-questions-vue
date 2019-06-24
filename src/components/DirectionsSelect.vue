<template lang="pug">
  BaseSelect(:options="options" :label="label")
</template>

<script>
export default {
  data() {
    return {
      options: [
        { name: 'One way', value: 1},
        { name: 'There and back', value: 2}
      ]
    }
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="sass">
</style>
