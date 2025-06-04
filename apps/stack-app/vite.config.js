import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/stack/',
  build: {
    rollupOptions: {
      input: {
        stack: './stack.html',
      },
    },
  },
  server: {
    open: '/stack.html',
    port: 4202,
  },
})
