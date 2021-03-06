import Vue from 'vue'
import App from './App.vue'
import './sw'
import router from './router'
import store from './store'
const fb = require('./firebaseConfig.js')
import './assets/scss/app.scss'
import 'firebaseui/dist/firebaseui.css'

Vue.config.productionTip = false

let app
fb.auth.onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            el: '#app',
            router,
            store,
            render: h => h(App)
        })
    }
})