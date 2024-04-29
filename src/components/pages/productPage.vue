<template lang="html">
  <div class="products_page">
    <div class="first">
      <div class="uk-container">
        <div class="uk-grid uk-flex-middle uk-child-width-1-1@s uk-child-width-1-2@m" uk-grid>
          <breadcrumb />
          <div class="category_page_name">
            Mobil telefonlar
          </div>
        </div>
        <hr>
      </div>
    </div>
    <section class="categories_items">
      <div class="uk-container">
        <div class="uk-grid-column-small uk-flex" uk-grid>
          <div class="uk-width-1-4@l uk-width-1-3@m uk-visible@m">
            <filterComponent />
          </div>
          <div class="uk-width-3-4@l uk-width-2-3@m">
            <headerFilter />
            <product />
            <pagination />
          </div>
        </div>
      </div>
    </section>
  </div> <!-- product_page -->
</template>

<script>
  export default {
    name: 'productPage',

    components: {
      breadcrumb: () => import('@/components/breadcrumb'),
      filterComponent: () => import('@/components/filterComponent'),
      headerFilter: () => import('@/components/headerFilter'),
      product: () => import('@/components/product'),
      pagination: () => import('@/components/pagination'),
    }
  }
</script>