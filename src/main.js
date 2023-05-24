import './assets/style.css'
import { createApp } from 'vue'
import { plugin, defaultConfig } from '@formkit/vue'
import App from './App.vue'

import { languages } from './locales'
import { defaultLocale } from './locales'
import { createI18n, useI18n } from 'vue-i18n'

const messages = Object.assign(languages)
const i18n = createI18n({
    legacy: false,
    locale: defaultLocale,
    fallbackLocale: 'ua',
    messages
})

const app = createApp(App, {
    setup() {
        const {t} = useI18n()
        return {t}
    }
}).use(i18n).use(plugin, defaultConfig)
app.config.globalProperties.selectedLanguage = localStorage.getItem('language') || 'ua';

app.mount('#app')