import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import react from '@vitejs/plugin-react'
import svgr from '@svgr/rollup'

// https://vitejs.dev/config/
export default defineConfig({
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  // },
  plugins: [
    svgr(),
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: { enabled: true },
      injectRegister: 'auto',

      includeAssets: ['favicon.ico', 'icon.png', 'icon.svg'],

      manifest: {
        name: 'camel-ui',
        short_name: 'camel',
        description: 'Um site para vendas de produtos eletrônicos',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'apple-touch-icon.png',
            sizes: '180x180',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
        ],
        theme_color: '#f08605',
        background_color: '#2d3143',
        display: 'standalone',
        start_url: '/signin',
        orientation: 'portrait',
        screenshots: [
          {
            src: 'login_540x720.png',
            type: 'image/png',
            sizes: '540x720',
            form_factor: 'narrow',
          },
          {
            src: 'cadastro_540x720.png',
            type: 'image/png',
            sizes: '540x720',
            form_factor: 'wide',
          },
        ],
      },
    }),
  ],
})
