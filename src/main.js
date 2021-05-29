import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from "axios";

// Vue
import VueMeta from 'vue-meta'
import VuePageTransition from 'vue-page-transition'
import VueLazyload from 'vue-lazyload'
import VueRellax from 'vue-rellax'
import VueYouTubeEmbed from 'vue-youtube-embed'
import Toasted from 'vue-toasted';

// Bootstrap
import {
  NavbarPlugin,
  ModalPlugin,
  CarouselPlugin,
  TabsPlugin,
  BSpinner,
  BSkeleton,
  BSkeletonImg,
  BCollapse,
  BSidebar,
} from 'bootstrap-vue'

import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

import './registerServiceWorker'

// Font Awesome
import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

import {
  faChevronUp,
  faChevronDown,
  faMapMarkerAlt,
  faSearch,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'

import {
  faInstagram,
  faFacebook,
  faTwitter,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import store from './store'

Vue.config.productionTip = false
Vue.prototype.$http = axios;
// axios.defaults.withCredentials = true

// Vue
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})
Vue.use(VuePageTransition)
Vue.use(VueLazyload)
Vue.use(VueRellax)
Vue.use(VueYouTubeEmbed)
Vue.use(Toasted)
Vue.use(require('vue-moment'));

// Bootstrap
Vue.use(NavbarPlugin)
Vue.use(ModalPlugin)
Vue.use(CarouselPlugin)
Vue.use(TabsPlugin)
Vue.component('b-spinner', BSpinner)
Vue.component('b-skeleton', BSkeleton)
Vue.component('b-skeleton-img', BSkeletonImg)
Vue.component('b-collapse', BCollapse)
Vue.component('b-sidebar', BSidebar)

// Font Awesome
Vue.component('font-awesome-icon', FontAwesomeIcon)
library.add(faChevronUp, faChevronDown, faMapMarkerAlt, faSearch, faQuestion, faInstagram, faFacebook, faTwitter, faYoutube)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')