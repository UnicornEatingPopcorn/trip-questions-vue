<template lang="pug">
  BaseSelect(:options="options" :label="label")
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          name: "1:00",
          value: 1
        },
        {
          name: "2:00",
          value: 2
        },
        {
          name: "3:00",
          value: 3
        },
        {
          name: "4:00",
          value: 4
        },
        {
          name: "5:00",
          value: 5
        },
        {
          name: "6:00",
          value: 6
        },
        {
          name: "7:00",
          value: 7
        },
        {
          name: "8:00",
          value: 8
        },
        {
          name: "9:00",
          value: 9
        },
        {
          name: "10:00",
          value: 10
        },
        {
          name: "11:00",
          value: 11
        },
        {
          name: "12:00",
          value: 12
        },
        {
          name: "13:00",
          value: 13
        },
        {
          name: "14:00",
          value: 14
        },
        {
          name: "15:00",
          value: 15
        },
        {
          name: "16:00",
          value: 16
        },
        {
          name: "17:00",
          value: 17
        },
        {
          name: "18:00",
          value: 18
        },
        {
          name: "19:00",
          value: 19
        },
        {
          name: "20:00",
          value: 20
        },
        {
          name: "21:00",
          value: 21
        },
        {
          name: "22:00",
          value: 22
        },
        {
          name: "23:00",
          value: 23
        },
        {
          name: "24:00",
          value: 24
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
