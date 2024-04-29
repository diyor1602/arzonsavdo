<template lang="html">
  <div class="filter_component">
    <div class="uk-card uk-card-default uk-card-body">
      <ul uk-accordion="multiple: true">
        <li class="uk-open">
          <a class="uk-accordion-title uk-nav-parent-icon" href="#"> Kategoriyalar</a>
          <div class="uk-accordion-content">
            <div class="filter_blok">
              <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li v-for="category in categories" :key="category">
                  <a href="#">
                    <span class="uk-margin-small-right" uk-icon="icon: chevron-right"></span> {{category.categoryName}}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </li> <!-- accordion_item -->

        <li class="uk-open">
          <a class="uk-accordion-title" href="#">Holati</a>
          <div class="uk-accordion-content">
            <div class="filter_item">
              <div>
                <label><input class="uk-checkbox" type="checkbox" checked> Yangi</label>
              </div>
              <div>
                <label><input class="uk-checkbox" type="checkbox">Qo'ldan qo'lga</label>
              </div>
            </div>
          </div>
        </li> <!-- accordion_item -->

        <li>
          <a class="uk-accordion-title" href="#">Ishlab chiqaruvchi</a>
          <div class="uk-accordion-content">
            <div class="filter_blok">
              <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li v-for="brand in brands" :key="brand">
                  <a href="#">
                    <span class="uk-margin-small-right" uk-icon="icon: tag"></span>
                    {{brand.name}}
                    <span class="uk-margin-small-left">({{brand.number}})</span>
                  </a>
                </li>
              </ul>
            </div> <!-- filter_blok -->
          </div>
        </li> <!-- accordion_item -->

        <li>
          <a class="uk-accordion-title" href="#">Rangi</a>
          <div class="uk-accordion-content">
            <div class="filter_blok">
              <ul class="uk-nav-default uk-nav-parent-icon" uk-nav>
                <li v-for="color in colors" :key="color">
                  <a href="#">
                    <span class="uk-margin-small-right color_round" :style="{backgroundColor:color.color}"></span>
                    {{color.name}}
                  </a>
                </li>
              </ul>
            </div> <!-- filter_blok -->
          </div>
        </li> <!-- accordion_item -->
      </ul> <!-- accordion -->
      <button class="uk-button green_button">Filterni bekor qilish</button>
    </div> <!-- uk-card -->
  </div> <!-- filter_component -->
</template>

<script>
export default {
  name: 'filterComponent',
  data: function() {
    return {}
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
    brands() {
      return this.$store.state.brands;
    },
    colors() {
      return this.$store.state.colors;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
