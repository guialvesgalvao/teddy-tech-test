/// <reference types="vitest/config" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from "@originjs/vite-plugin-federation";

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host-app',
      filename: 'remoteEntry.js',
      remotes: {
        authApp: "https://teddy-tech-test-auth.vercel.app/assets/remoteEntry.js",
        customersPanel: "https://teddy-tech-test-customers-panel.vercel.app/assets/remoteEntry.js", 
      },
      exposes: {
        './useUserStore': './src/shared/stores/user-store.ts',
      },
      shared: ['react', 'react-dom'],
    })
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts'
  },
});
