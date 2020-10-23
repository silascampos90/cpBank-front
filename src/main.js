import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './config/store'

import './config/bootstrap'
import './config/msg'


Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMzQ0Mjg2MSwiZXhwIjoxNjAzNDQ2NDYxLCJuYmYiOjE2MDM0NDI4NjEsImp0aSI6Im9wRm9DdlNuMkxtbGNJUlciLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.W98NDHUGoDywUt2SMIkdPoIVZJr__fpZL1XLvog26rw'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')