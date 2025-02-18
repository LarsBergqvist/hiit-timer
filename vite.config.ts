import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/hiit-timer/',
  server: {
    port: 5173,
    open: true
  },
  build: {
    assetsDir: 'assets',
    // Ensure assets are loaded relative to base path
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
}) 