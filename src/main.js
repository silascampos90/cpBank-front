import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './config/store'

import './config/bootstrap'
import './config/msg'


Vue.config.productionTip = false

//require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbGhvc3Q6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTYwMzQ0NjM2NiwiZXhwIjoxNjAzNDQ5OTY2LCJuYmYiOjE2MDM0NDYzNjYsImp0aSI6IkJ6N2NlcHRaN1VHNW5tM3QiLCJzdWIiOjIsInBydiI6Ijg3ZTBhZjFlZjlmZDE1ODEyZmRlYzk3MTUzYTE0ZTBiMDQ3NTQ2YWEifQ.hyYZQDhqqeLLKc6Cs1jaoO9iZwNBQaYlteikXXeVRag'
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')