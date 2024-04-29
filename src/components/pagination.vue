<template lang="html">
  <div class="paginationComponent">
    <paginate class="uk-flex-center uk-flex"
      :page-count="pageCount"
      :click-handler="paginationHandler"
      :prev-text="'&lsaquo;'"
      :prev-class="'page-item'"
      :prev-link-class="'page-link'"
      :next-class="'page-item'"
      :next-link-class="'page-link'"
      :next-text="'&rsaquo;'"
      :container-class="'pagination justify-content-center'"
      :page-class="'page-item'"
      :page-link-class="'page-link'">
      </paginate>
  </div>
</template>

<script>
export default {
  name: 'pagination',
  data: function() {
    return {
      pageCount: 10
    }
  },
}
</script>

<style lang="css" scoped>
</style>
