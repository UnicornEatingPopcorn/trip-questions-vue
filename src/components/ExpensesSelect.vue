<template lang="pug">
  BaseSelect(:options="options" :label="label")
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "beneath 1000$",
          value: 1
        },
        {
          name: "1000$ - 2000$",
          value: 2
        },
        {
          name: "2000$ - 3000$",
          value: 3
        },
        {
          name: "3000$ - 4000$",
          value: 4
        },
        {
          name: "4000$ - 6000$",
          value: 5
        },
        {
          name: "6000$ - 8000$",
          value: 6
        },
        {
          name: "above 8000$",
          value: 7
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
