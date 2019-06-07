<template lang="pug">
  footer.nav.fixed-bottom
    .container
      .row.col-4.offset-md-4
        img.footer-brand(src="@/assets/GitHub-Mark-32px.png")
        a.footer-brand(href="https://github.com/Malory6072") My github profile

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

.footer-brand
  font-family: 'Montserrat', sans-serif
  font-size: 1.3em
  color: #000000e3
  margin: auto

</style>
