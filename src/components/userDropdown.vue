<template lang="html">
  <div class="dropdown">
    <button class="uk-button" title="Shahsiy kabinet">
      <span uk-icon="icon: user;"></span>
    </button>
    <div uk-dropdown="mode: click">
      <ul class="uk-nav uk-dropdown-nav">
        <li><a href="#modal-login" uk-toggle>Kirish</a></li>
        <li class="uk-nav-divider"></li>
        <li><a href="#modal-register" uk-toggle>Ro'yhatdan o'tish</a></li>
      </ul>
    </div>
    <div id="modal-login" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <h2 class="uk-modal-title">Avtorizatsiya</h2>
        <div>
          <fieldset class="uk-fieldset">
            <div class="uk-margin">
              <input class="uk-input" placeholder="Telefon raqamingiz">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="password" placeholder="Parol">
            </div>
            <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
              <label><input class="uk-checkbox" type="checkbox">Meni eslab qolish</label>
            </div>
          </fieldset>
        </div>
        <div>
          <button class="uk-button green_button" type="button">Kirish</button>
        </div>
      </div>
    </div> <!-- //modal -->

    <div id="modal-register" uk-modal>
      <div class="uk-modal-dialog uk-modal-body">
        <button class="uk-modal-close-outside" type="button" uk-close></button>
        <h2 class="uk-modal-title">Ro'yhatdan o'tish</h2>
        <div>
          <fieldset class="uk-fieldset">
            <div class="uk-margin">
              <input class="uk-input" placeholder="Telefon raqamingiz">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Ismingiz">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="text" placeholder="Familyangiz">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="password" placeholder="Parol">
            </div>
            <div class="uk-margin">
              <input class="uk-input" type="password" placeholder="Parolni takrorlang">
            </div>
          </fieldset>
        </div>
        <div>
          <button class="uk-button green_button" type="button">Ro'yhatdan o'tish</button>
        </div>
      </div>
    </div> <!-- //modal -->

  </div>
</template>

<script>
  export default {
    name: 'userDropdown',
    data() {
      return {
      }
    }
  }
</script>