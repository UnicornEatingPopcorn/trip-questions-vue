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

h1
  color: #BAE5FE

.base-input
   background-color: white !important
   color: black !important
</style>
