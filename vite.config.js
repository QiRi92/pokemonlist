import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const repoName = 'pokemonlist'

export default defineConfig({
  plugins: [vue()],
  base: `/${repoName}/`,
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})