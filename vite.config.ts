import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
    },
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    // Generate a single HTML file with inlined CSS and JS for easy distribution
    rollupOptions: {
      output: {
        // Ensure consistent file names for easy packaging
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Optimize for distribution
    minify: 'terser',
    sourcemap: false,
    // Ensure all assets are included
    assetsInlineLimit: 0
  },
  // Configure for static hosting
  base: './',
})