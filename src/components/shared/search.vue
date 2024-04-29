<template lang="html">
  <div class="search">
    <a class="uk-navbar-toggle" uk-search-icon href="#" title="Saytdan izlash"></a>
    <div class="uk-drop" uk-drop="mode: click; pos: left-center; offset: 0">
      <form class="uk-search uk-search-navbar uk-width-1-1">
        <input class="uk-search-input" type="search" placeholder="Izlash..." autofocus>
      </form>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search_component'
  }
</script>

<style>
  ::-webkit-input-placeholder {
    color: #ffffff !important;
  }

  ::-moz-placeholder {
    color: #ffffff !important;
  }

  :-moz-placeholder {
    color: #ffffff !important;
  }

  :-ms-input-placeholder {
    color: #ffffff !important;
  }
</style>