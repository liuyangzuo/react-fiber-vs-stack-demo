import { defineConfig } from 'vite'
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  base: '/fiber/',
  resolve: {
    alias: {
      react: path.resolve(__dirname, './src/shims/react-custom.js'),
      'react-dom': path.resolve(__dirname, './src/shims/react-dom-custom.js'),
    }
  },
  build: {
    rollupOptions: {
      input: {
        fiber: './index.html',
      },
    },
    outDir: '../../dist/fiber', // shared folder!
    emptyOutDir: false, // don't wipe out shared folder
  },
  server: {
    open: '/index.html',
    port: 4201,
  },
})
