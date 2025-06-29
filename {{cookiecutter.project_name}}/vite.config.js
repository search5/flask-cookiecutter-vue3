import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'move-files',
      writeBundle() {
        // index.html을 별도 디렉터리로 이동
        if (fs.existsSync('dist/index.html')) {
          fs.mkdirSync('dist/html', { recursive: true })
          fs.renameSync('dist/index.html', 'dist/html/index.html')
        }
        
        // manifest.json을 별도 디렉터리로 이동
        if (fs.existsSync('dist/.vite/manifest.json')) {
          fs.mkdirSync('dist/config', { recursive: true })
          fs.renameSync('dist/.vite/manifest.json', 'dist/config/manifest.json')
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      output: {
        // CSS와 JS 파일을 assets 디렉터리에 통합
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'assets/[name]-[hash][extname]'
          }
          // 기타 asset 파일들 (이미지, 폰트 등)
          return 'assets/[name]-[hash][extname]'
        },
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    }
  }
})
