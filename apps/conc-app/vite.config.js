import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/conc/',
  build: {
    rollupOptions: {
      input: {
        conc: './index.html',
      },
    },
  },
  server: {
    open: '/index.html',
    port: 4203,
  },
})
