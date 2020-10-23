import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './config/store'

import './config/bootstrap'
import './config/msg'


Vue.config.productionTip = false

require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMzQzODMyOSwiZXhwIjoxNjAzNDQxOTI5LCJuYmYiOjE2MDM0MzgzMjksImp0aSI6IjFiU2hTRXFxYWhheXpGYzgiLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.f9uInvEUS9lo3wrkLbp7uQfgfy-ZnD6npCruY1nE3E4'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')