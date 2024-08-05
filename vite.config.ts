import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // Output directory cho build
  },
  resolve: {
    alias: {
      '@': '/src', // Alias cho thư mục src
    },
  },    
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import '@fortawesome/fontawesome-free/css/all.css';`,
      },
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
})

