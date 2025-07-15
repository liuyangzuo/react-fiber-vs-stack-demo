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
    outDir: '../../dist/stack', // shared folder!
    emptyOutDir: false, // don't wipe out shared folder
  },
  server: {
    open: '/index.html',
    port: 4202,
  },
})
