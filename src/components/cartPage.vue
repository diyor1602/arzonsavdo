<template lang="html">
  <section class="cart_page">
    <div class="uk-container">
      <div class="cart_title">
        <span uk-icon="cart"></span>
        Savatchadagi mahsulotlar
      </div>
      <div v-if="items.length > 0">
        <cartItem />
        <div class="text-center">
          <button class="uk-button cart_button">Xaridni boshlash <span uk-icon="credit-card"></span>
          </button>
        </div>
      </div>
      <div v-else>
        <div class="cart_pust">
          <div><i class="far fa-frown-open"></i> </div>
          Savatchada mahsulotlar yo'q
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  export default {
    name: 'cartPage',
    computed: {
      items() {
        return this.$store.state.cartItems;
      }
    },
    components: {
      cartItem: () => import('@/components/cartItem'),
    }
  }
</script>

<style lang="css" scoped>
</style>