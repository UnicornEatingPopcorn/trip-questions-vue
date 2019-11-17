<template>
  <div id="app">
    <NavBar />
    <router-view :key="$route.fullPath" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"
import Footer from "@/components/Footer.vue"

export default {
  components: {
    NavBar,
    Footer
  }
}
</script>

<style lang="sass">
@import "~bulma/bulma.sass"

#app
  width: 100%
  height: 80%
  background-color: #000000e3

.question-plan
  background-color: #495057
  border-radius: 1%
  padding: 30px 40px

.select-input
  width: 220px

h1
  color: #BAE5FE

.base-input
   background-color: #495057 !important
   color: #dbdbdb !important
   border-inline-start: 0px !important
   border-block-end: 1px solid black !important
   border-block-start: 0px !important
   border-inline-end: 0px !important
   width: 100%
   font-size: 15px

.error-message
  color: red

.button_margin-top
  margin-top: 20px

.top-margin
  margin-top: 40px
</style>
