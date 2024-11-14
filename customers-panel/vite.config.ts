/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'remote-app',
        filename: 'remoteEntry.js',
        // Modules to expose
        exposes: {
          './CustomersPanel': './src/App.tsx',
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
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  },
})