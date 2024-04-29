import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [{
        img: require('../assets/image/slider_item.png'),
        name: 'Xiaomi Mi 9T Pro',
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
      {
        img: require('../assets/image/slider_item2.png'),
        name: 'Iphone 11 Pro, 256 Gb',
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
    ]
  },
  mutations: {},
  actions: {}
});
export default store;