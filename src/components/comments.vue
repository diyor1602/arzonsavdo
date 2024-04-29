<template lang="html">
  <div class="comments">
    <ul class="uk-comment-list">
      <li>
        <article class="uk-comment uk-visible-toggle" tabindex="-1" v-for="item in items" :key="item">
          <header class="uk-comment-header uk-position-relative">
            <div class="uk-grid-medium uk-flex-middle" uk-grid>
              <div class="uk-width-auto">
                <img class="uk-comment-avatar" :src="item.img" width="80" height="80" alt="">
              </div>
              <div class="uk-width-expand">
                <h4 class="uk-comment-title uk-margin-remove"><a class="uk-link-reset" href="#">{{item.name}}</a></h4>
                <p class="uk-comment-meta uk-margin-remove-top"><a class="uk-link-reset" href="#">{{item.data}}</a></p>
              </div>
            </div>
          </header>
          <div class="uk-comment-body">
            <p>{{item.text}}</p>
          </div>
        </article>
      </li>
    </ul>
    <div class="uk-margin">
      <div class="text-center">
        <button href="#toggle-animation" class="uk-button green_button" type="button" uk-toggle="target: #toggle-animation; animation: uk-animation-fade">Sharh qoldirish</button>
      </div>

      <div hidden id="toggle-animation" class="uk-card uk-margin">
        <textarea class="uk-textarea" rows="5" placeholder="Sharh qoldirish"></textarea>
        <div class="text-center">
          <button class="uk-button green_button">Jo'natish</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'comments',
    data: function() {
      return {
        items: [{
            img: require('../assets/image/avatar.png'),
            name: 'Malika Azimova',
            data: '19.04.2020',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',

          },
          {
            img: require('../assets/image/avatar_boy.png'),
            name: 'Aziz Azizov',
            data: '18.04.2020',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
          },
        ]
      }
    },
  }
</script>

<style lang="css" scoped>
</style>