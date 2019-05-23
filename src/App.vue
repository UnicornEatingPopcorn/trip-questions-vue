<template>
  <div id="app">
    <NavBar/>
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue"

export default {
  components: {
    NavBar
  }
}
</script>

<style lang="sass">
#app
  box-sizing: border-box
  width: 100%
  height: 100vh
  background-color: #000000e3
  background-image: url('assets/2.png')
  background-position: center

.purple-content
  background-color: #8d95fdc4
  height: 100%

h1
  color: #BAE5FE

.base-input
   width: 220px !important
   height: 35px
   background-color: white !important
   color: black !important
</style>
