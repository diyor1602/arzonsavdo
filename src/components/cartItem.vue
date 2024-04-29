<template lang="html">
  <div class="">
    <div class="uk-flex uk-flex-between uk-flex-middle cart_element" v-for="(item, index ) in items" :key="item.id">
      <div class="cart_image">
        <img :src="item.img" />
      </div>
      <div class="cart_info">
        <div class="cart_info_name">
          <a href="#">
            {{item.name}}
          </a>
        </div>
        <div class="cart_info_count">
          <span class="number_cart_item">
            <input type="number" value="1" class="uk-input" autofocus placeholder="soni">
          </span>
          <span class="x">x</span>
          <span class="green">$</span>
          <span class="cart_total_price green">{{item.price}}</span>
        </div>
      </div>
      <div class="cart_delete">
        <span uk-icon="icon: trash" v-on:click="items.splice(index, 1)"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'cartItem',
    computed: {
      items() {
        return this.$store.state.cartItems;
      }
    }
  }
</script>

<style lang="css" scoped>
</style>