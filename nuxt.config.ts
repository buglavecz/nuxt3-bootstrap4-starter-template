const path = require('path');
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    experimental: {
        payloadExtraction: false
    },
    vite: {
        build: {
            sourcemap: true,
        },
        resolve: {
            alias: {
                '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
            }
        },
        css: {
            devSourcemap: true,
            preprocessorOptions: {
                scss: {
                    additionalData: `@import "@/assets/scss/variables"; // override bootstrap variables and load to vue components
                                      @import "~bootstrap/scss/functions";
                                      @import "~bootstrap/scss/variables";
                                     `,
                },
            },
        },
    },
    css: ['~/assets/scss/index.scss'],
});
