<template lang="html">
  <div id="offcanvas-slide" uk-offcanvas="overlay: true">
    <div class="uk-offcanvas-bar uk-flex uk-flex-column">
      <button class="uk-offcanvas-close" type="button" uk-close></button>
      <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
        <li class="uk-nav-header"> <span class="uk-margin-small-right" uk-icon="icon: home"> </span> Asosiy</li>
        <li><a href="#">Bosh sahifa</a></li>
        <li><a href="#">Chegirmalar</a></li>
        <li class="uk-nav-divider"></li>
        <li class="uk-nav-header"> <span class="uk-margin-small-right" uk-icon="icon: thumbnails"> </span>Kategoriyalar</li>
        <li><a href="#">Mobil telefonlar</a></li>
        <li class="uk-parent">
          <a href="#">Aksesuarlar</a>
          <ul class="uk-nav-sub">
            <li><a href="#">Power bank</a></li>
            <li><a href="#">Kabellar</a></li>
            <li><a href="#">G'iloflar</a></li>
            <li><a href="#">Quloqchinlar</a></li>
          </ul>
        </li>
        <li><a href="#">Planshetlar</a></li>
        <li class="uk-parent">
          <a href="#">Texnologiyalar</a>
          <ul class="uk-nav-sub">
            <li><a href="#">Power bank</a></li>
            <li><a href="#">Kabellar</a></li>
            <li><a href="#">G'iloflar</a></li>
            <li><a href="#">Quloqchinlar</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sidebar-menu',
}
</script>

<style lang="css" scoped>
</style>
