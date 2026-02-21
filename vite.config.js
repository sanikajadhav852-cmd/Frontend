// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5173,
    strictPort: true,  // ← keep your current port if you want
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',  // or http://localhost:5000
        changeOrigin: true,
        secure: false,
        // Optional: rewrite if your backend routes don't start with /api
        // rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})