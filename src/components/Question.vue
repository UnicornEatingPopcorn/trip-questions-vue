<template lang="pug">
.col-6(v-if="question.step == step")
  Answer(:answer="answer")
</template>

<script>
import Answer from "@/components/Answer.vue"

export default {
  components: {
    Answer
  },
  props: {
    question: Object,
    step: Number
  },
  methods: {
    createFreshAnswerObject() {
      const id = Math.floor(Math.random() * 10000000)

      return {
        id: id,
        question: this.question,
        value: 0
      }
    }
  },
  data() {
    return {
      answer: this.createFreshAnswerObject()
    }
  }
}
</script>
