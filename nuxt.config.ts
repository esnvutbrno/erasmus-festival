import {defineNuxtConfig} from 'nuxt'
import svgLoader from "vite-svg-loader"


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
    ],
    tailwindcss: {
        cssPath: '~/assets/css/main.css',
    },
    vite: {
        plugins: [svgLoader({
            svgoConfig: {
                plugins: [
                    {
                        name: 'preset-default',
                        params: {
                            overrides: {
                                cleanupIDs: false,
                            }
                        }
                    }
                ]
            }
        })]
    }
})
