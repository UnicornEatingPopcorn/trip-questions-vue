<template lang="pug">
  footer.nav.fixed-bottom
    .container
      .row.col-4.offset-md-4
        a.footer-brand(href="https://github.com/AdventurousHunter") Adventurous Hunter
          img.footer-brand(src="@/assets/GitHub-Mark-32px.png")

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
  margin-left: 10px

</style>
