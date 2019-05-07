<template lang="pug">
.col-6(v-if="question.step == step")
  label.form-text {{ question.title }}
  input.form-control(:placeholder="question.placeholder" :id="question.id")
  br
</template>

<script>
export default {
  props: {
    question: Object,
    step: Number
  }
}
</script>
