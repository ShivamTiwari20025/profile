// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: true, // equivalent to 0.0.0.0
    port: process.env.PORT || 4173,
    allowedHosts: ['profile-2-5pr0.onrender.com']
  }
})