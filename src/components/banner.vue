<template lang="html">
  <div class="uk-flex-middle" uk-grid>
    <div v-for="banner in banners" :key="banner.id" class="uk-width-1-2@m uk-width-1-2@s uk-inline-clip uk-transition-toggle" tabindex="0">
        <a href="#">
            <img :src="banner.img" class="banner_img uk-transition-scale-up uk-transition-opaque"/>
        </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'banner',
  data: function() {
    return {
      banners: [{
          id: 1,
          img: require('../assets/image/banner1.png'),
        },
        {
          id: 2,
          img: require('../assets/image/banner2.png'),
        },
      ]
    }
  },
  methods: {}
}
</script>

<style lang="css" scoped>
</style>
