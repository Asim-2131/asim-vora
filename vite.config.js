import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/asim-vora/',
  server: {
    allowedHosts: ["b9e356390969.ngrok-free.app"]
  }
})
