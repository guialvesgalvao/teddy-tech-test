import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'host-app',
        filename: 'remoteEntry.js',
        remotes: {
          authApp: "http://localhost:5003/assets/remoteEntry.js", // Novo microfrontend
          customersPanel: "http://localhost:5004/assets/remoteEntry.js", // Novo microfrontend
        },
        exposes: {
          './useUserStore': './src/shared/stores/user-store.ts',
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
    outDir: 'dist', // ou 'es2022' para suporte a top-level await
  },
})
