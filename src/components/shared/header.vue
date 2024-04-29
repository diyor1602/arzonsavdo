<template lang="html">
  <div class="">
    <header>
      <div class="uk-container">
        <div class="uk-flex uk-flex-between uk-flex-middle">
          <div class="uk-flex uk-flex-between uk-flex-middle logo_section">
            <logo />
            <div class="header_menyu">
              <a href="#offcanvas-slide" uk-toggle>
                <span uk-icon="icon: menu" class="toggle"></span>
              </a>
            </div>
          </div>
          <div class="text_right uk-flex uk-flex-middle uk-visible@m">
            <search />
            <userDropdown />
            <cartDropdown />
            <selectedItems />
          </div>
        </div>
      </div>
    </header>
    <sidebar-menu />
  </div>
</template>

<script>
export default {
  name: 'header-component',
  components: {
    logo: () => import('@/components/logo'),
    search: () => import('@/components/shared/search'),
    userDropdown: () => import('@/components/userDropdown'),
    selectedItems: () => import('@/components/selectedItems'),
    cartDropdown: () => import('@/components/cartDropdown'),
    sidebarMenu: () => import('@/components/shared/sidebarMenu')
  }
}
</script>

<style lang="css" scoped>
</style>
