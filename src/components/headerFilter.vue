<template lang="html">
  <div class="header_filter">
    <nav class="uk-navbar-container" uk-navbar>
      <div class="uk-navbar-left uk-hidden@m" uk-toggle="target: #offcanvas-flip">
        <ul class="uk-navbar-nav">
          <li><a href="#"><span uk-icon="cog"></span>Filtrlash</a></li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li class="uk-active"><a href="#"><span uk-icon="settings"></span>Eng yangilar</a></li>
          <li><a href="#"><span uk-icon="settings"></span> Narxga ko‘ra</a></li>
        </ul>
      </div>
    </nav>
    <div id="offcanvas-flip" uk-offcanvas="flip: true; overlay: true">
      <div class="uk-offcanvas-bar paddingsiz">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <filterComponent />
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'headerFilter',
    components: {
      filterComponent: () => import('@/components/filterComponent'),
    }
  }
</script>

<style lang="css" scoped>
</style>