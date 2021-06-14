import './reactApp.jsx'
import my from './my.js';
import '../stylesheets/main.scss';

import Vue from 'vue';
import VueApp from'./VueApp.vue';

console.log("Thisu is index.js");
my();

new Vue({
  el: '#vue-root',
  render: (h) => h(VueApp),
});
