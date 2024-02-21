import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@services': `${path.resolve('./src/services')}/`,
      '@components': `${path.resolve(`./src/components`)}/`,
      '@stores': `${path.resolve('./src/stores')}/`,
      '@hooks': `${path.resolve('./src/hooks')}/`,
      '@pages': `${path.resolve('./src/pages')}/`,
      '@utils': `${path.resolve('./src/utils')}/`,
      '@wrappers': `${path.resolve('./src/wrappers')}/`,
      '@containers': `${path.resolve(`./src/containers`)}/`,
      '@assets': `${path.resolve('./src/assets')}/`
    }
  },
  base: '/nextech/app/',
  build: {
    outDir: 'app'
  }
})
