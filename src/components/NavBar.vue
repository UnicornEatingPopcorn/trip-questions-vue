<template lang="pug">
  #nav.nav
    router-link.nav-brand(:to="{ path: '/' }") Questions
    .col-4.justify-content-left
      router-link.nav-path(:to="{ name: 'plan-list' }") Plans
      span.pipe |
      router-link.nav-path(:to="{ name: 'plan-create' }") Create plan
      span.pipe |
      router-link.nav-path(:to="{ name: 'plan-show' }") Show plan

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

.pipe
  margin-left: 10px
  margin-right: 10px

.nav-path
  color: #000000e3
</style>
