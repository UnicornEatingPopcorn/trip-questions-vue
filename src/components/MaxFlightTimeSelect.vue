<template lang="pug">
  BaseSelect(:options="options" :label="label")
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "5 hours",
          value: 1
        },
        {
          name: "7 hours",
          value: 2
        },
        {
          name: "9 hours",
          value: 3
        },
        {
          name: "12 hours",
          value: 4
        },
        {
          name: "15 hours",
          value: 5
        },
        {
          name: "18 hours",
          value: 6
        },
        {
          name: "24 hours",
          value: 7
        },
        {
          name: "30 hours",
          value: 8
        },
        {
          name: "38 hours",
          value: 9
        }
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
