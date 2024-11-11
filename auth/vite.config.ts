import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        exposes: {
          './Auth': './src/App.tsx',
        },
        shared: ['react','react-dom']
      })
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist'
  },
})
