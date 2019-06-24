<template lang="pug">
  BaseSelect(:options="options" :label="label")
</template>

<script>
export default {
  data() {
    return {
      options: [
        { name: '1', value: 1},
        { name: '2', value: 2},
        { name: '3', value: 3},
        { name: '4', value: 4},
        { name: '5', value: 5},
        { name: '6', value: 6},
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
