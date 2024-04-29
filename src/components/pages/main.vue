<template lang="html">
  <div class="main_page">
    <bigSlider />
    <section>
      <div class="uk-container">
        <div class="text-center section_title">
          Kategoriyalar
        </div>
        <circled-slider :items="this.$store.state.categories" />
      </div>
    </section> <!-- categories_slider -->

    <section class="topProducts">
      <div class="uk-container">
        <div class="text-center section_title">
          Yangi mahsulotlar
        </div>
        <div class="text-center see_all">
          <a href="#"><span uk-icon="thumbnails"></span> Barchasini ko'rish </a>
        </div>
        <productsSlider :items="this.$store.state.items" />
      </div>
    </section> <!-- topProducts -->


    <section class="banners">
      <div class="uk-container">
        <banner />
      </div>
    </section>


    <section class="topProducts">
      <div class="uk-container">
        <div class="text-center section_title">
          Ommabop mahsulotlar
        </div>
        <div class="text-center see_all">
          <a href="#"><span uk-icon="thumbnails"></span> Barchasini ko'rish </a>
        </div>
        <productsSlider :items="this.$store.state.items" />
      </div>
    </section> <!-- topProducts -->


    <section class="brandsSlider">
      <div class="uk-container">
        <div class="text-center section_title">
          Mashxur brendlar
        </div>
        <brandsSlider />
      </div>
    </section> <!-- brandsSlider -->

    <section class="video_slider">
      <div class="uk-container">
        <div class="text-center section_title">
          Video blog
        </div>
        <div class="text-center see_all">
          <a href="#"><span uk-icon="thumbnails"></span> Barchasini ko'rish </a>
        </div>
          <videoBlog :blogs="blogs" />
      </div>
    </section> <!-- brandsSlider -->

  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data: function(){
    return {
      blogs: [{
            id: 1,
            img: require('../../assets/image/blog1.jpg'),
            url: 'https://www.youtube.com/embed/YlEipTibvAc',
            name: 'IPHONE 11 VS SAMSUNG GALAXY S20'
          },
          {
            id: 2,
            img: require('../../assets/image/banner2.png'),
            url: 'https://www.youtube.com/embed/lngXj4HkP0k',
            name: 'AKG Y50BT Bluetooth Headphones'
          },
          {
            id: 3,
            img: require('../../assets/image/banner1.png'),
            url: 'https://www.youtube.com/embed/4eudh9HDYzg',
            name: 'ТОП Xiaomi павербанков '
          },
          {
            id: 4,
            img: require('../../assets/image/banner2.png'),
            url: 'https://www.youtube.com/embed/lngXj4HkP0k',
            name: 'AKG Y50BT Bluetooth Headphones'
          },
        ]
    }
  },
  components: {
    bigSlider: () => import('@/components/sliders/bigSlider'),
    circledSlider: () => import('@/components/sliders/circledSlider'),
    productsSlider: () => import('@/components/sliders/productsSlider'),
    brandsSlider: () => import('@/components/sliders/brandsSlider'),
    banner: () => import('@/components/banner'),
    videoBlog: () => import('@/components/videoBlog'),
  }
}
</script>
