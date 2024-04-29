<template lang="html">
  <div class="full_info_table uk-overflow-auto">
    <h2 class="table_title">Umumiy ma’lumot</h2>
    <table class="uk-table uk-table-hover">
      <tbody>
        <tr v-for="item in items" :key="item">
          <td uk-leader="media: @m">{{item.ques}}</td>
          <td>{{item.ans}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'fullInfoTable',
  data() {
    return {
      items: [{
          ques: 'Barmoq izi',
          ans: 'Mavjud'
        },
        {
          ques: 'Kafolat ',
          ans: '12 oy'
        },
        {
          ques: 'SIM-karta turi va soni',
          ans: '2 (Nano Sim)'
        },
        {
          ques: 'Operatsion sistema versiyasi',
          ans: 'Android 9.0 (Pie)'
        },
        {
          ques: 'Og‘irligi',
          ans: '155 g'
        },
        {
          ques: 'Xususiyatlari ',
          ans: 'Displey va yuqori aniqlikdagi kameralar, 8 yadroli protsessor'
        },
        {
          ques: 'O‘lchami ',
          ans: '71.9 x 148.8 x 9.2 mm'
        },
        {
          ques: 'Bluetooth ',
          ans: 'Bluetooth 4.2'
        },
        {
          ques: 'USB',
          ans: 'Mavjud'
        },
        {
          ques: 'Wi-Fi ',
          ans: 'Wi-Fi 802.11n'
        },
        {
          ques: 'Tezkor xotira hajmi ',
          ans: '3 GB'
        },
        {
          ques: 'Doimiy xotira hajmi',
          ans: '32GB'
        },
      ]
    }
  },
}
</script>

<style lang="css" scoped>
</style>
