<template lang="html">
  <div class="products_slider">
    <div uk-slider="sets: true; autoplay: true; autoplay-interval: 5000">
      <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-4@m uk-child-width-1-2@s uk-grid">
          <li v-for="item in items" :key="item.id">
            <div class="uk-card uk-card-default">
              <div class="uk-card-media-top">
                <div class="product_box uk-inline-clip uk-transition-toggle  uk-light" tabindex="0">
                  <a href="#"><img :src="item.img" /></a>
                  <div class="vertical_icons uk-transition-slide-bottom-small">
                    <div>
                      <span uk-icon="heart" uk-tooltip="Tanlanganlarga qo'shish" :class="{green:item.selected}" @click="$set(item, 'selected', !item.selected)"></span>
                    </div>
                    <div>
                      <span uk-icon="cart" uk-tooltip="Korzinkaga qo'shish" :class="{green:item.selected2}" @click="$set(item, 'selected2', !item.selected2)"></span>
                    </div>
                    <div uk-lightbox>
                      <a :href="item.img" uk-icon="icon: expand" uk-tooltip="Mahsulotni ko'rish" :data-caption="item.name"></a>
                    </div>
                  </div>
                </div> <!-- //uk-card -->
              </div>
              <div class="uk-card-body product_info">
                <div class="product_name">
                  <a href="#">{{item.name}}</a>
                </div>
                <div>
                  <rate :length="5" :value="item.stars" :readonly="true" />
                </div>
                <div class="product_prices">
                  <span class="old_price">
                    ${{item.oldPrice}}
                  </span>
                  <span class="new_price">
                    $ {{item.price}}
                  </span>
                </div>
              </div> <!-- //uk-card-body -->
            </div> <!-- //uk-card -->
          </li> <!-- //slider_item -->
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
  name: 'productsSlider',
  props: {
    items: {
      type: Array
    }
  },
  data: function() {
    return {
      selected: undefined,
      selected2: undefined,
    }
  },
  methods: {},
  mounted: function(){
  }
}
</script>

<style lang="css" scoped>
</style>
