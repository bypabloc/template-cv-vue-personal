import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { mapState } from "vuex";

import 'bootstrap'

import '/node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '/node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import '../src/assets/scss/custom.scss';

const app = createApp(App)

document.title = "Pablo Contreras - CV";

app.mixin({
    computed: {
        // map `this.theme` to `this.$store.getters.theme`
        ...mapState([
            'theme',
        ]),
    },
})
app.use(store)
app.mount('#app')
