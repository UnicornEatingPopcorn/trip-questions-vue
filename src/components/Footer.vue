<template lang="pug">
footer.footer
  .content.has-text-centered
    a.footer__creator-name(href="https://github.com/UnicornEatingPopcorn") Unicorn Eating Popcorn &nbsp;
      img.footer__image(src="@/assets/GitHub-Mark-32px.png")
</template>

<script></script>

<style lang="sass">
.footer
  &__creator-name
    color: #000000e3
    display: flex
    justify-content: center
    align-items: center

  &__creator-name:hover
    transform: scale(1.1)
    color: black

  &__img
    margin-bottom: 2px
    height: 20px
</style>
