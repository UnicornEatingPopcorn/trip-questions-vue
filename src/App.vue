<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath" />
    <Footer/>
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
#app
  width: 100%
  height: 80%
  background-color: #000000e3
  background-image: url('assets/2.png')
  background-position: center

.purple-content
  background-color: #8d95fdc4
  height: 100vh

.question-plan
  background-color: #BAE5FE
  border-radius: 1%
  padding: 20px
  border: solid 2px #C0C5FE
  margin-top: 40px

h1
  color: #BAE5FE

.base-input
   background-color: white !important
   color: black !important

.error-message
  color: red

.button_margin-top
  margin-top: 20px

.top-margin
  margin-top: 40px
</style>
