import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const myCustomLightTheme = {
    dark: false,
    colors: {
        surface: '#FFFFFF',
        primary: '#3E0D64',
        'primary-darken-1': '#1D0550',
        secondary: '#C69FE9',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    }
}

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        myCustomLightTheme
    }
})

const app = createApp(App)

app.use(router)

app.use(vuetify).mount('#app')
