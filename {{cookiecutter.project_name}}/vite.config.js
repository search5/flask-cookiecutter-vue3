import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'move-files',
      generateBundle() {
        // 빌드 전에 디렉터리 생성
        fs.mkdirSync('src_python/{{cookiecutter.project_name}}/static', { recursive: true })
      },
      writeBundle() {
        // manifest.json을 별도 디렉터리로 이동
        if (fs.existsSync('dist/.vite/manifest.json')) {
          fs.mkdirSync('src_python/{{cookiecutter.project_name}}/lib', { recursive: true })
          fs.renameSync('dist/.vite/manifest.json', 'src_python/{{cookiecutter.project_name}}/lib/manifest.json')
          fs.renameSync('dist/src_python/{{cookiecutter.project_name}}/static', 'src_python/{{cookiecutter.project_name}}/static')
        }
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '/main.js': fileURLToPath(new URL('./src/main.js', import.meta.url))
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: './src/main.js',
      output: {
        // CSS와 JS 파일을 assets 디렉터리에 통합
        assetFileNames: (assetInfo) => {
          if (/\.(css)$/.test(assetInfo.name)) {
            return 'src_python/{{cookiecutter.project_name}}/static/[name]-[hash][extname]'
          }

          // 기타 asset 파일들 (이미지, 폰트 등)
          return 'src_python/{{cookiecutter.project_name}}/static/[name]-[hash][extname]'
        },
        chunkFileNames: 'src_python/{{cookiecutter.project_name}}/static/[name]-[hash].js',
        entryFileNames: 'src_python/{{cookiecutter.project_name}}/static/[name]-[hash].js'
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
