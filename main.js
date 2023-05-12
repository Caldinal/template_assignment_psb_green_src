import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './main.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faArrowRightFromBracket, faBuilding, faChevronDown, faCircleArrowUp, faComment, faDesktop, faHistory, faLock, faMedal, faMobile, faPaperPlane, faTaxi, faUser, faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'
import VueNumber from 'vue-number-animation'

library.add(faChevronDown, faBuilding, faHistory, faPaperPlane, faMedal, faLock, faUser, faArrowRightFromBracket, faCircleArrowUp, faDesktop, faComment, faTaxi, faMobile, faThumbsUp, faThumbsDown)



createApp(App).use(VueNumber).component('font-awesome-icon', FontAwesomeIcon).use(store).use(router).mount('#app')
