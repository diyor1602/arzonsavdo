<template lang="html">
  <section class="inside_product">
    <div class="uk-container">
      <breadcrumb />
      <div class="uk-grid-column-small uk-flex" uk-grid>
        <div class="uk-width-1-2@m uk-flex-first@s uk-flex-last">
          <productImage />
        </div>
        <div class="uk-width-1-2@m">
          <div class="product_full_info">
            <h2 class="product_name">{{productName}}</h2>
            <div class="product_prices">
              <span class="old_price">
                ${{productPrice}}
              </span>
              <span class="new_price">
                ${{price}}
              </span>
            </div>
            <div>
              <rate :length="5" :value="stars" />
            </div>

            <table class="uk-table">
              <tr>
                <td> Kafolat muddati: </td>
                <td> {{productWarranty}} oy</td>
              </tr>
              <tr>
                <td>Operatsion sistema versiyasi: </td>
                <td> {{productSistema}}</td>
              </tr>
              <tr>
                <td>Doimiy xotira hajmi: </td>
                <td>{{productSave}}</td>
              </tr>
            </table>
            <div class="buy_product">
              <span uk-icon="heart" uk-tooltip="Tanlanganlarga qo'shish" :class="{green:selected}" @click="$set('selected', !selected)"></span>
              <span uk-icon="cart" uk-tooltip="Korzinkaga qo'shish" :class="{green:selected2}" @click="$set('selected2', !selected2)"></span>
              <button class="uk-button buy_button">Sotib olish</button>
            </div>
          </div>
        </div> <!-- uk-width-1-2@m -->
      </div> <!-- uk-grid -->
    </div> <!-- uk-container -->
    <section class="product_tab">
      <div class="uk-container">
        <ul class="uk-subnav uk-subnav-pill uk-flex-center" uk-switcher="animation: uk-animation-slide-left-medium, uk-animation-slide-right-medium">
          <li><a href="#">Texnik imkoniyatlari</a></li>
          <li><a href="#">Sharhlar</a></li>
        </ul>

        <ul class="uk-switcher uk-margin">
          <li>
            <fullInfoTable />
          </li>
          <li>
            <comments />
          </li>
        </ul>
      </div>
    </section> <!-- product_tab -->
  </section>

</template>

<script>
  export default {
    name: 'productInside',
    data() {
      return {
        selected: undefined,
        selected2: undefined,
        productName: 'Samsung Galaxy S10',
        productPrice: 100,
        price: 599.0,
        stars: 4,
        productWarranty: 12,
        productSistema: 'Android 9.0 (Pie)',
        productSave: '32GB'
      }
    },
    components: {
      breadcrumb: () => import('@/components/breadcrumb'),
      productImage: () => import('@/components/productImage'),
      fullInfoTable: () => import('@/components/fullInfoTable'),
      comments: () => import('@/components/comments')
    },

  }
</script>

<style lang="css" scoped>
</style>