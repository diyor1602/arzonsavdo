<template lang="html">
  <footer>
    <desktopFooter class="uk-visible@m" />
    <mobileFooter class="uk-hidden@m" />
  </footer>
</template>

<script>
  export default {
    name: 'footer-component',
    components: {
      desktopFooter: () => import('@/components/shared/desktopFooter'),
      mobileFooter: () => import('@/components/shared/mobileFooter'),
    }
  }
</script>

<style lang="css" scoped>
</style>