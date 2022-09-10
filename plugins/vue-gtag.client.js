import VueGtag from 'vue-gtag-next'
import {defineNuxtPlugin, useRouter} from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueGtag, {
        property: {
            id: 'UA-180183263-3'
        }
    }, useRouter())
})
