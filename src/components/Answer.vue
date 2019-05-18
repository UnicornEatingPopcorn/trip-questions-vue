<template lang="pug">
  BaseSelect(v-if="answer.question.component === 'BaseSelect'" :label="answer.question.title" :options="answer.question.select_options" placeholder="answer.question.placeholder" v-model="answer.value")

  BaseCalendar(v-else :label="answer.question.title" v-model="answer.value")
</template>

<script>
import BaseSelect from "@/components/BaseSelect.vue"
import BaseCalendar from "@/components/BaseCalendar.vue"

export default {
  components: {
    BaseSelect,
    BaseCalendar
  },
  props: {
    answer: Object
  }
}
</script>
