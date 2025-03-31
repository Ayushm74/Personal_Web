import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  server: {
    host: '0.0.0.0',  // This allows external access
    port: 3000,       // Change port to 3000
    strictPort: true, // Don't try other ports if 3000 is taken
    open: true,       // Automatically open browser
  }
}) 