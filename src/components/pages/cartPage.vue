<template lang="html">
  <div class="uk-container">
    <cartItem />
  </div>
</template>

<script>
export default {
  name: 'cartPage',
  components: {
    cartItem: () => import('@/components/cartItem'),
  }
}
</script>

<style lang="css" scoped>
</style>
