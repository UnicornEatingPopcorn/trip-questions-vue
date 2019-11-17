<template lang="pug">
.header
  .columns.header__columns.is-marginless
    .column.is-3.is-offset-1
      p.header__title Portfolio version of creating travel plan
    // Responsive toggle
    //- .column.is-1
    //-   a.navbar-burger.burger(@mouseover="navbarMenu = !navbarMenu" role="button" aria-expanded="false")
    //-     span(aria-hidden="true")
    //-     span(aria-hidden="true")
    //-     span(aria-hidden="true")
    // Menu
    .column
      .header__items
        .header__item(v-for="navItem in navItems")
          router-link.header__item-link(:to="navItem.path") {{ navItem.title }} 

      //- .dropdown.is-right(:class="{'is-active': navbarMenu}")
      //-   .dropdown-menu(id="dropdown-menu" role="menu")
      //-     .dropdown-content
      //-       .dropdown-item.is-nav-link(v-for="navItem in navItems")
      //-         router-link.a-navbar.is-centered-responsive(to="navItem.path") {{ navItem.title }}
  .header__border
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        {
          title: "Create plan",
          path: "/"
        },
        {
          title: "Edit plan",
          path: "plan-edit"
        },
        {
          title: "Plan list",
          path: "plan-list"
        }
      ],
      navbarMenu: false
    }
  }
}
</script>

<style lang="sass">
.header
  height: 50px

  &__title
    color: #f7b944
    font-size: 18px
    margin-bottom: 0px

  &__items
    display: flex
    justify-content: space-evenly

  &__item:hover
    transform: scale(1.1)

  &__item-link
    color: white
    font-size: 16px
    &.router-link-exact-active
      color: #f7b944

  &__item-link:hover
    color: #f7b944

  &__border
    border-bottom: 1px solid black

  &__columns
    display: flex
    align-items: center
</style>
