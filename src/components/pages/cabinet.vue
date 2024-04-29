<template lang="html">
  <section class="cabinet">
    <div class="uk-container">
      <div class="cabinet_info">
        <div class="name"><span uk-icon="icon: user"></span> Mohinur Zokirova</div>
        <span><span uk-icon="icon: table"></span> Id: 154896</span>
      </div>
      <div class="uk-container">
        <div uk-grid>
          <div class="uk-width-auto@m">
            <ul class="uk-tab-left" uk-tab="connect: #component-tab-left; animation: uk-animation-fade">
              <li><a href="#">Mening buyurtmalarim</a></li>
              <hr>
              <li><a href="#">Xabarnomalar</a></li>
              <hr>
              <li><a href="#">Manzil</a></li>
              <hr>
              <li><a href="#">Shahsiy ma'lumotlar</a></li>
            </ul>
          </div>
          <div class="uk-width-expand@m">
            <ul id="component-tab-left" class="uk-switcher">
              <li>
                <h3 class="uk-title"><span class="uk-margin-small-right" uk-icon="thumbnails"></span>Mening buyurtmalarim</h3>

                <div class="uk-overflow-auto">
                  <table cellpadding="10" class="uk-table uk-table-small">
                    <thead>
                      <tr>
                        <th>Foto</th>
                        <th>Mahsulotning nomi</th>
                        <th>Narx</th>
                        <th>Soni </th>
                        <th>Yetkazib berish turi </th>
                        <th>Holat </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="item in items" :key="item">
                        <td class="cabinet_image"><img :src="item.img" alt=""></td>
                        <td class="item_name">{{item.name}}</td>
                        <td>{{item.price}} $</td>
                        <td class="item_number">1 dona</td>
                        <td>O'zb. pochtasi</td>
                        <td>Buyurtma yo'lda</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </li>
              <li>
                <div class="notifications">
                  <h3 class="uk-title"><span class="uk-margin-small-right" uk-icon="bell"></span>Xabarnomalar</h3>
                  <div class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
                    <p class="text-success uk-text-normal"> <span class="uk-margin-small-right" uk-icon="check"></span> Buyurtmangiz pochta bo'limiga topshirildi!</p>
                  </div>
                  <div class="uk-card uk-card-default uk-card-small uk-card-hover uk-card-body">
                    <p class="text-success uk-text-normal"> <span class="uk-margin-small-right" uk-icon="check"></span> Buyurtmangiz qadoqlandi</p>
                  </div>
                </div>
              </li>
              <li>
                <h3 class="uk-title"><span class="uk-margin-small-right" uk-icon="file-edit"></span> Mening manzilim</h3>
                <div class="edit_personal">
                  <fieldset class="uk-fieldset">
                    <div class="uk-margin">
                      <label class="uk-form-label">Ko'cha nomi</label>
                      <input class="uk-input" type="text">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Uy raqami</label>
                      <input class="uk-input" type="text">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Qavat</label>
                      <input class="uk-input" type="text">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Bo'linma</label>
                      <input class="uk-input" type="text">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Viloyat</label>
                      <select class="uk-select">
                        <option>Farg'ona</option>
                        <option>Andijon</option>
                      </select>
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Shahar yoki tuman</label>
                      <select class="uk-select">
                        <option>Farg'ona</option>
                        <option>Qo'qon</option>
                      </select>
                    </div>
                    <button class="uk-button green_button">Saqlash</button>
                  </fieldset>
                </div>
              </li>
              <li>
                <h3 class="uk-title"><span class="uk-margin-small-right" uk-icon="file-edit"></span> Shahsiy ma'lumotlarni o'zgartirish</h3>
                <div class="edit_personal">
                  <fieldset class="uk-fieldset">
                    <div class="uk-margin">
                      <label class="uk-form-label">Telefon raqamingiz</label>
                      <input class="uk-input" value="+99899998877" disabled>
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Ismingiz</label>
                      <input class="uk-input" type="text" value="Mohinur">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Familyangiz</label>
                      <input class="uk-input" type="text" value="Zokirova">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Elektron pochtangiz</label>
                      <input class="uk-input" type="email">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Jinsingiz</label>
                      <div class="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                        <label><input class="uk-radio" type="radio" name="radio2" checked> Ayol</label>
                        <label><input class="uk-radio" type="radio" name="radio2"> Erkak</label>
                      </div>
                    </div>
                    <h3 class="uk-title"><span class="uk-margin-small-right" uk-icon="file-edit"></span> Parolni o'zgartirish</h3>
                    <div class="uk-margin">
                      <label class="uk-form-label">Eski parol</label>
                      <input class="uk-input" type="password">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Yangi parol</label>
                      <input class="uk-input" type="password">
                    </div>
                    <div class="uk-margin">
                      <label class="uk-form-label">Parolni tasdiqlang</label>
                      <input class="uk-input" type="password">
                    </div>
                    <button class="uk-button green_button">Saqlash</button>
                  </fieldset>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'cabinet',
    computed: {
      items() {
        return this.$store.state.cartItems;
      }
    }
  }
</script>

<style lang=" css" scoped>
</style>