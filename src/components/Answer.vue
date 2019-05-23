<template lang="pug">
  component(:is="answer.question.component" :label="answer.question.title" :options="answer.question.select_options" placeholder="answer.question.placeholder" v-model="answer.value")
</template>

<script>

export default {
  props: {
    answer: Object
  }
}
</script>
