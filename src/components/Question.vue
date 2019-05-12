<template lang="pug">
.col-6(v-if="question.step == step")
  label.form-text {{ question.title }}
  input.form-control.mb-3(:placeholder="question.placeholder" :id="question.id")
</template>

<script>
export default {
  props: {
    question: Object,
    step: Number
  }
}
</script>
