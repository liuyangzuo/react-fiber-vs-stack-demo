import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/fiber/',
  resolve: {
    alias: {
      react: '/src/shims/react-custom.js',
      'react-dom': '/src/shims/react-dom-custom.js',
    }
  },
  build: {
    rollupOptions: {
      input: {
        fiber: './fiber.html',
      },
    },
  },
  server: {
    open: '/fiber.html',
    port: 4201,
  },
})
