import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    strictPort: true,
    allowedHosts: [
      'yto8mwi7.frasydihost.space',
      'localhost', // tetap bisa pakai localhost
    ],
  }
})
