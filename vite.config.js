import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/tomasdev-portafolio/',
  build: {
    outDir: 'dist' // Vite genera la carpeta 'dist', no 'build'
  }
})
