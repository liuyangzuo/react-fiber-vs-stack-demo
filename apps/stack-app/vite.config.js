import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/stack/',
  build: {
    rollupOptions: {
      input: {
        stack: './index.html',
      },
    },
  },
  server: {
    open: '/index.html',
    port: 4202,
  },
})
