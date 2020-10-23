import Vue from 'vue'

export const userKey = '__knowledge_user'
export const baseApiUrl = 'http://localhost:8000/api'

export function showError(e) {
    if (e && e.response && e.response.data.errors) {
        var message;
        if(e.response.data.errors.password){
            message = e.response.data.errors.password[0]
        }
        if(e.response.data.errors.generic){
            message = e.response.data.errors.generic[0]
        }
        if(e.response.data.errors.cpf){
            message = e.response.data.errors.cpf[0]
        }
        Vue.toasted.global.defaultError({ msg: message })
    } else if (typeof e === 'string') {
        Vue.toasted.global.defaultError({ msg: e })
    } else {
        Vue.toasted.global.defaultError()
    }
}

export default { baseApiUrl, showError, userKey }