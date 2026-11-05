import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Port 3000 : correspond à FRONTEND_URL=http://localhost:3000 du backend
  server: { port: 3000 },
})
