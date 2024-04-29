<template lang="html">
  <div class="uk-grid all_products">
    <div  class="uk-width-1-2@m uk-width-1-2@s uk-width-1-3@l" v-for="item in items" :key="item.id">
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
    </div> <!-- //uk-width-1-3@m -->
  </div> <!-- //all_products -->
</template>

<script>
export default {
  name: 'product',
  components: {},
  data: function() {
    return {
      selected: undefined,
      selected2: undefined,
    }
  },
  computed: {
    items() {
      return this.$store.state.items;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
