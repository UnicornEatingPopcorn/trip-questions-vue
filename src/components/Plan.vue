<template lang="pug">
  .col-6
    h2 {{ plan.id }}
</template>

<script>
export default {
  props: {
    plan: Object
  }
}
</script>
