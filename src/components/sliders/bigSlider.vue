<template lang="html">
  <div class="slider">
    <div class="uk-container">
      <div uk-slider="autoplay: true; autoplay-interval: 5000" class="uk-position-relative uk-light">
        <ul class="uk-slider-items">
          <li class="cart_element uk-width-1-1" v-for="item in items" :key="item.id">
            <div class="uk-flex-middle uk-flex-between" uk-grid>
              <div class="banner_info uk-width-1-2@m uk-width-2-3@s uk-flex-first@s uk-flex-last">
                <div class="banner_name">
                  {{ item.name }}
                </div>
                <div class="banner_text">
                  {{ item.text }}
                </div>
                <div class="banner_buttton">
                  <button class="uk-button">
                    Batafsil ma'lumot
                  </button>
                </div>
              </div>
              <div class="banner_img uk-width-1-2@m uk-width-1-3@s">
                <img :src="item.img" />
              </div>
            </div>
          </li>
        </ul>
        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div>
    </div>
  </div> <!-- //slider -->
</template>

<script>
  export default {
    name: 'bigSlider',

    computed: {
      items() {
        return this.$store.state.items
      }
    }
  }
</script>

<style lang="css" scoped>
</style>