<template lang="pug">
.col-6(v-if="question.step == step")
  component(:is="question.component" :label="question.title" :options="question.select_options" placeholder="question.placeholder" v-model="answer.value")
</template>

<script>
import AirportSelect from "@/components/AirportSelect.vue"

export default {
  props: {
    answer: Object,
    step: Number
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
