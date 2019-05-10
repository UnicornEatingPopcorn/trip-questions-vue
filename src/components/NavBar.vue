<template lang="pug">
  #nav.nav
    router-link.nav-brand(to='/questions') Questions
</template>

<script>
export default {
}
</script>

<style lang="sass">
.nav
  display: flex
  justify-content: space-between
  align-items: center
  height: 60px
  background-color: #82CFFD

.nav-brand
  font-family: 'Montserrat', sans-serif
  font-weight: 700
  font-size: 1.5em
  color: #000000e3
  text-decoration: none
  margin-left: 40px
</style>
