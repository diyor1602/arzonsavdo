<template lang="html">
  <div>
    <lingallery :items="products" />
  </div>
</template>

<script>
  import Lingallery from 'lingallery';
  export default {
    name: 'productImage',
    data() {
      return {
        products: [{
            src: require('../assets/image/slider_item.png'),
            thumbnail: require('../assets/image/slider_item.png')
          },
          {
            src: require('../assets/image/slider_item2.png'),
            thumbnail: require('../assets/image/slider_item2.png')
          },
          {
            src: require('../assets/image/item2.jpg'),
            thumbnail: require('../assets/image/item2.jpg')
          },
          {
            src: require('../assets/image/item4.png'),
            thumbnail: require('../assets/image/item4.png')
          }
        ],
      };
    },
    components: {
      Lingallery
    },
  }
</script>

<style lang="css" scoped>
</style>