<template lang="html">
  <div uk-slider="sets: true;" class="back_op">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
      <ul class="uk-slider-items uk-child-width-1-1 uk-child-width-1-3@m uk-child-width-1-2@s video_blog" uk-grid>
        <li v-for="blog in blogs" :key="blog.id">
          <div class="uk-card uk-card-default">
            <div class="uk-inline uk-light">
              <img :src="blog.img" class="video_img">
              <div class="uk-overlay-default uk-position-cover">
                <div class="uk-position-center">
                  <a :href=" '#' + 'modal_youtube' + blog.id" uk-icon="play-circle" uk-toggle> </a>
                </div>
              </div>
            </div>
            <div class="video_title_card">
              <div class="video_title">{{blog.name}}</div>
            </div>
          </div>
          <div :id="'modal_youtube' + blog.id" class="uk-flex-top youtube_modal" uk-modal>
            <div class="uk-modal-dialog uk-width-auto uk-margin-auto-vertical">
              <button class="uk-modal-close-outside" type="button" uk-close></button>
              <iframe :src="blog.url" frameborder="0" uk-video></iframe>
            </div>
          </div>
        </li>
      </ul>
      <div class="uk-hidden@s">
        <a class="uk-position-center-left uk-position-small" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small" href="#" uk-slidenav-next uk-slider-item="next"></a>
      </div>
    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center"></ul>
  </div>
</template>

<script>
  export default {
    name: 'videoBlog',
    props: {
      blogs: {
        type: Array
      }
    },
    data: function() {
      return {
      }
    },
    methods: {}
  }
</script>

<style lang="css" scoped>
</style>