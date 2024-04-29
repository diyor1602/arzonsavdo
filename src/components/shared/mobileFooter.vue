<template lang="html">
  <div class="mobile_footer">
    <div class="uk-container">
      <div class="uk-flex uk-flex-between icons">
        <div v-for="item in items" :key="item.id">
          <a :href="item.url" :uk-icon="item.icon"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mobileFooter',
  components: {},
  data: function() {
    return {
      items: [{
          icon: 'home',
          url: ''
        },
        {
          icon: 'cart',
          url: ''
        },
        {
          icon: 'search',
          url: ''
        },
        {
          icon: 'user',
          url: ''
        },
      ]
    }
  },
}
</script>

<style lang="css" scoped>
</style>
