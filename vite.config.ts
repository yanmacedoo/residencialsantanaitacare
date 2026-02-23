import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    // Compressão Gzip
    compression({
      algorithm: 'gzip',
      ext: '.gz',
      threshold: 1024,
    }),
    // Compressão Brotli (melhor taxa de compressão)
    compression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 1024,
    }),
  ],
  build: {
    // Minificação com esbuild (padrão do Vite, mais rápido)
    minify: 'esbuild',
    // Tamanho mínimo para avisos de chunk
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // Code splitting manual por grupo de bibliotecas
        manualChunks: {
          // Libs principais do React
          'vendor-react': ['react', 'react-dom'],
          // Framer Motion separado (é pesada)
          'vendor-motion': ['framer-motion'],
          // i18n separado
          'vendor-i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          // Lucide icons separado
          'vendor-icons': ['lucide-react'],
          // Galeria separada
          'vendor-gallery': ['react-photo-album', 'yet-another-react-lightbox'],
          // Carousel separado
          'vendor-carousel': ['embla-carousel-react'],
        },
      },
    },
    // Inline assets menores que 4kb diretamente no HTML
    assetsInlineLimit: 4096,
    // CSS code splitting
    cssCodeSplit: true,
  },
})
