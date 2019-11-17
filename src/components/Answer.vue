<template lang="pug">
.column.is-6
  component(
    :is="question.component"
    :label="question.title"
    :options="question.select_options"
    v-model="answer.value")
</template>

<script>
import AirportSelect from "@/components/AirportSelect.vue"
import SeatsSelect from "@/components/SeatsSelect.vue"
import DirectionsSelect from "@/components/DirectionsSelect.vue"
import ExpensesSelect from "@/components/ExpensesSelect.vue"
import RoadBookSelect from "@/components/RoadBookSelect.vue"
import ArrivalTimeSelect from "@/components/ArrivalTimeSelect.vue"
import ReturnTimeSelect from "@/components/ReturnTimeSelect.vue"
import MaxTransfersSelect from "@/components/MaxTransfersSelect.vue"
import MaxFlightTimeSelect from "@/components/MaxFlightTimeSelect.vue"

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
    AirportSelect,
    SeatsSelect,
    DirectionsSelect,
    ExpensesSelect,
    RoadBookSelect,
    ArrivalTimeSelect,
    ReturnTimeSelect,
    MaxTransfersSelect,
    MaxFlightTimeSelect
  }
}
</script>

<style lang="sass">
.top
  margin-top: 10px
</style>
