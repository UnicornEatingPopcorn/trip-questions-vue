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
</style>
