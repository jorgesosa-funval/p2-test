import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/p2-test/',
  build:{
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  }
})
