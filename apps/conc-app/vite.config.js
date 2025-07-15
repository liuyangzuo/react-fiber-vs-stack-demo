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
    outDir: '../../dist/conc', // shared folder!
    emptyOutDir: false, // don't wipe out shared folder
  },
  server: {
    open: '/index.html',
    port: 4203,
  },
})
