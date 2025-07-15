import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build:{
    outDir: '../../dist', // shared folder!
    emptyOutDir: false, // don't wipe out shared folder
  },
  server: {
    port: 4200,
    proxy: {
      '/fiber/': {
        target: 'http://localhost:4201',
        changeOrigin: true,
      },
      '/stack/': {
        target: 'http://localhost:4202',
        changeOrigin: true,
      },
      '/conc/': {
        target: 'http://localhost:4203',
        changeOrigin: true,
      },
    },
  },
})
