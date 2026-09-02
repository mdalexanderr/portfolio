import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Deployed at https://mdalexanderr.github.io/portfolio/ via GitHub Pages
  base: '/portfolio/',
  plugins: [react(), tailwindcss()],
})
