import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MenuBar from './components/MenuBar'

Vue.use(MenuBar)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  components:{
    'menu-bar': MenuBar
  },
  render: h => h(App)
}).$mount('#app')
