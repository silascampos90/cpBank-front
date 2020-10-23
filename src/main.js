import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './config/store'

import './config/bootstrap'
import './config/msg'


Vue.config.productionTip = false

//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMzQ1NDUyNSwiZXhwIjoxNjAzNDU4MTI1LCJuYmYiOjE2MDM0NTQ1MjUsImp0aSI6IlF5UFo5NHpzQ0VDT1Nia00iLCJzdWIiOjEsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.5hJKYMfGSwpzs4b05qdg1g0BjVcZk8gsa9rE2hCX7XA'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')