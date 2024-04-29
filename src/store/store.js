import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    items: [{
        id: 1,
        img: require('../assets/image/slider_item.png'),
        name: 'Xiaomi Mi 9T Pro',
        oldPrice: 630,
        price: 599.0,
        stars: 5,
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
      {
        id: 2,
        img: require('../assets/image/slider_item2.png'),
        name: 'Iphone 11 Pro, 256 Gb',
        oldPrice: 1100,
        price: 999.0,
        stars: 3.5,
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
      {
        id: 3,
        img: require('../assets/image/item3.png'),
        name: 'Samsung Galaxy S10',
        oldPrice: 1000,
        price: 960,
        stars: 4,
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
      {
        id: 4,
        img: require('../assets/image/item4.png'),
        name: 'Xiaomi Mi 6',
        oldPrice: 280,
        price: 200,
        stars: 3,
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
      {
        id: 5,
        img: require('../assets/image/item3.png'),
        name: 'Samsung Galaxy S10',
        oldPrice: 1000,
        price: 960,
        stars: 4,
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
      {
        id: 6,
        img: require('../assets/image/slider_item.png'),
        name: 'Xiaomi Mi 9T Pro',
        oldPrice: 630,
        price: 599.0,
        stars: 5,
        text: 'Процессор Snapdragon™ 855 поможет раскрыть ваш потенциал. Производительность процессора в одноядерном режиме была увеличена на 45%, увеличение скорости в играх на 25%, а производительность ИИ увеличилась в три раза. Это та скорость, которую вы ждали.'
      },
    ],
    categories: [{
        icon: '<i class="fas fa-mobile-alt"></i>',
        name: 'Mobil telefonlar'
      },
      {
        icon: '<i class="fas fa-headphones-alt"></i>',
        name: 'Aksesuarlar'
      },
      {
        icon: '<i class="fas fa-tablet-alt"></i>',
        name: 'Planshetlar'
      },
      {
        icon: '<i class="fas fa-laptop"></i>',
        name: 'Texnologiyalar'
      },
      {
        icon: '<i class="fas fa-headphones-alt"></i>',
        name: 'Aksesuarlar'
      }
    ],
    brands: [{
        name: 'Samsung',
        number: 15
      },
      {
        name: 'Apple',
        number: 10
      },

      {
        name: 'Huawei',
        number: 11
      },
      {
        name: 'Xiaomi',
        number: 12
      },
      {
        name: 'Nokia',
        number: 8
      },
      {
        name: 'Artel',
        number: 5
      },
      {
        name: 'Lg',
        number: 8
      },
    ],
    colors: [{
        name: 'gold',
        color: '#F6E0C9'

      },
      {
        name: 'silver',
        color: '#E2E3DE'
      },

      {
        name: 'black',
        color: '#242424'
      },
      {
        name: 'white',
        color: '#FEFCFF'
      },
      {
        name: 'rose gold',
        color: '#BF8F8F'
      },
      {
        name: 'blue',
        color: '#6BC9FD'
      },
      {
        name: 'red',
        color: '#A7000C'
      },
    ],
    cartItems: [{
        img: require('../assets/image/item1.jpg'),
        name: 'Iphone 11 Pro, 256 Gb',
        price: 980.0

      },
      {
        img: require('../assets/image/item2.jpg'),
        name: 'iPhone 8, 128 Gb',
        price: 560.0

      },
      {
        img: require('../assets/image/item1.jpg'),
        name: 'Iphone 11 Pro, 256 Gb',
        price: 999.0
      }
    ]
  },

  mutations: {},
  actions: {}
});