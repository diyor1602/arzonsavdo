<template lang="html">
  <div class="categories_slider">
    <div uk-slider="autoplay: true; autoplay-interval: 5000">
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-child-width-1-2@s uk-grid">
          <li v-for="item in items" :key="item.id">
            <a href="#">
              <div class="category_round">
                <div class="category_icon" v-html="item.icon">
                </div>
              </div>
              <div class="category_name">
                {{item.name}}
              </div>
            </a>
          </li>
        </ul>
        <div class="uk-hidden@s">
          <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
          <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
        </div>
      </div>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center"></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'name',
  props: ['name', 'items'],
  data: function() {
    return {}
  }
}
</script>

<style lang="css" scoped>
</style>
