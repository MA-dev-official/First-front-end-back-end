import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': 'https://0d8da17e-1af4-4c77-a279-b9abf814d55e-00-wx4k9eff7d3j.sisko.replit.dev'
    },
    allowedHosts: [
      '0d8da17e-1af4-4c77-a279-b9abf814d55e-00-wx4k9eff7d3j.sisko.replit.dev'
    ]
  },
})
