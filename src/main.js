import Vue from 'vue'
import App from './App.vue'
// import messages from '' 
// import './registerServiceWorker'
import router from './router'
import store from './store'
// import "./assets/scss/common.scss"
import "./assets/scss/New/new-style.css"
import "./assets/scss/New/libs.min.css"

import "./assets/js/libs.min.js"
import firebase from "firebase"
import Notifications from 'vue-notification'
import VueMeta from 'vue-meta'
import i18n from './i18n'
import VueCarousel from "vue-carousel"
import vClickOutside from 'v-click-outside'
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

import axios from "axios"
import VueMoment from 'vue-moment';
const moment = require("moment")

// Request locale in localStorage
  if(!localStorage.locale){
    let l = window.navigator.language
    localStorage.setItem('locale', `"${window.navigator.language}"`)
  }

  let lang = JSON.parse(localStorage.locale)

  // Set SYKABLYAT BORIS language
  if(lang == "ru" || lang == "uk"){
    require("moment/locale/ru")
    localStorage.setItem('locale','"ru"')
  } 

  // Set tea w/ milk language
  else if (lang == "en" || lang == "en-gb" || lang == "en-US" || lang == "en-GB" || lang == "en-AU" || lang == "de" || lang == "de-CH" || lang == "de-AT" || lang == "de-LU" || lang == "de-LI") {
    require("moment/locale/en-gb")
    localStorage.setItem('locale','"en-gb"')


  } 
  // Set nii hao language
  else if (lang == "zh-cn" || lang == "zh-TW" || lang == "zh-CN" || lang == "zh-HK" ||lang == "zh-SG") {
    require("moment/locale/zh-cn")
    localStorage.setItem('locale','"zh-cn"')


  } else {
    require("moment/locale/ru")
    localStorage.setItem('locale','"ru"')
  }
 

// Vue.prototype.$moment = moment;

Vue.use(VueMoment, moment)

Vue.use(Notifications)
Vue.use(VueCarousel)
Vue.use(VueMeta)
Vue.use(vClickOutside)

firebase.initializeApp({
  apiKey: "AIzaSyDTCEwMzp4m3InTsK-NzwS131SW22m7Px8",
  authDomain: "webfontshost.firebaseapp.com",
  databaseURL: "https://webfontshost.firebaseio.com",
  projectId: "webfontshost",
  storageBucket: "webfontshost.appspot.com",
  messagingSenderId: "30567639654",
  appId: "1:30567639654:web:004f061bc9d6f43abb5ba7"
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
