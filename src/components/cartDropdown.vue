<template lang="html">
  <div class="dropdown dropdown_second" title="korzinka">
    <button class="uk-button relative">
      <div class="items_length">
        {{items.length}}
      </div>
      <span uk-icon="icon: cart;"></span>
    </button>
    <div class="uk-width-large" uk-dropdown="mode: click">
      <div v-if="items.length > 0">
        <cartItem />
      </div>
      <div v-else>
        <div class="cart_pust">
          <div><i class="far fa-frown-open"></i> </div>
          Savatchada mahsulotlar yo'q
        </div>
      </div>
      <div class="text-center">
        <button class="uk-button cart_button">Savatchaga o'tish <span uk-icon="chevron-right"></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cartDropdown',
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