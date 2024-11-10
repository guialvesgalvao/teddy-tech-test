import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      federation({
        name: 'host-app',
        remotes: {
          remoteApp: "https://teddy-tech-test-app1.vercel.app/assets/remoteEntry.js",
          newRemoteApp: "https://teddy-tech-test-app2.vercel.app/assets/remoteEntry.js", // Novo microfrontend
        },
        shared: ['react','react-dom']
      })
  ],
    build: {
    target: 'esnext',
    outDir: 'dist', // ou 'es2022' para suporte a top-level await
  },
})
