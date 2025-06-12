// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: true, // bind to 0.0.0.0
    port: process.env.PORT || 4173,
    allowedHosts: ['*'] // allow all hosts
  }
})
