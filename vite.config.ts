// filepath: vite.config.js
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    host: '127.0.0.1', // Changed to explicit localhost IP
    strictPort: false, // Allow fallback to other ports if 3000 is busy
  },
  base: '/' // Ensure base URL is set correctly
})