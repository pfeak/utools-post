import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  // html: {
  //   index: 'public/index.html'
  // },
  plugins: [vue()],
})
