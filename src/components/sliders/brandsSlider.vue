<template lang="html">
  <div class="brands_slider">
    <div uk-slider="sets: true; autoplay: true; autoplay-interval: 5000">
      <div class="uk-slider-items uk-child-width-1-2 uk-child-width-1-5@m uk-child-width-1-3@s uk-grid">
        <div v-for="brand in brands" :key="brand.id">
            <a href="#">
              <img :src="brand.img" />
            </a>
        </div>
      </div>
      <ul class="uk-slider-nav uk-dotnav uk-flex-center"></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'brandsSlider',
  data: function() {
    return {
      brands: [{
          id: 1,
          img: require('../../assets/image/brand3.png'),
          name: 'Iphone',
        },
        {
          id: 2,
          img: require('../../assets/image/brand4.png'),
          name: 'Huawei',
        },
        {
          id: 3,
          img: require('../../assets/image/brand6.png'),
          name: 'Artel',
        },
        {
          id: 4,
          img: require('../../assets/image/brand1.png'),
          name: 'Xiaomi',
        },
        {
          id: 5,
          img: require('../../assets/image/brand2.png'),
          name: 'Samsung',

        },
        {
          id: 6,
          img: require('../../assets/image/brand5.png'),
          name: 'Lg',
        },
      ]
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>
