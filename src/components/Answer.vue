<template lang="pug">
.col-6.top
  component(
    :is="question.component"
    :label="question.title"
    :options="question.select_options"
    placeholder="question.placeholder"
    v-model="answer.value")
</template>

<script>
import AirportSelect from "@/components/AirportSelect.vue"

export default {
  props: {
    answer: Object
  },
  computed: {
    question() {
      return this.answer.question
    }
  },
  components: {
    AirportSelect
  }
}
</script>

<style lang="sass">
.top
  margin-top: 10px
</style>
