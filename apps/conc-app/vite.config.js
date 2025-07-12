import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
// https://vite.dev/config/
export default defineConfig({
  base: '/conc/',
  plugins: [react()],
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
