import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: "/AEPortFolio" ,// ✅ case-sensitive and matches repo name
  plugins: [react(),
    tailwindcss()]
    
})
