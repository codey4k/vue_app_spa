import Vue from 'vue'
import Menu from './components/Menu.vue'
import Header from './components/Header.vue'
import App from './App.vue'

Vue.component('header', Header)
Vue.component('menu', Menu)

new Vue({
  el: '#app',
  render: h => h(App)
})
