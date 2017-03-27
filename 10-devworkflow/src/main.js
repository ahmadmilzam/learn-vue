import Vue from 'vue';
import App from './App.vue';

window.app = new Vue({
  el: '#app',
  render: createElement => createElement(App),
});
