<template>
<div id="app">
  <header-component />
  <main-page />
  <!-- <productPage /> -->
  <!-- <cartPage /> -->
  <!-- <productInside /> -->
  <!-- <cabinet /> -->
  <footer-component />
</div>
</template>

<script>
import Uikit from 'uikit'
import Icons from 'uikit/dist/js/uikit-icons'

Uikit.use(Icons);

export default {
  name: 'App',
  components: {
    headerComponent: () => import('@/components/shared/header'),
    mainPage: () => import('@/components/pages/main'),
    // productPage: () => import('@/components/pages/productPage'),
    // productInside: () => import('@/components/pages/productInside'),
    // cartPage: () => import('@/components/cartPage'),
    // cabinet: () => import('@/components/pages/cabinet'),
    footerComponent: () => import('@/components/shared/footer'),

  }
}
</script>
<style lang="less">
@import "../node_modules/uikit/src/less/uikit.less";
</style>
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css');
@import url('./assets/css/style.css');
</style>
