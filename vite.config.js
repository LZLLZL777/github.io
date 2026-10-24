import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 默认支持仓库 https://github.com/LZLLZL777/github.io
// GitHub Pages: https://lzllzl777.github.io/github.io/
// 若以后改为 用户名.github.io 仓库，将 base 改为 '/'
export default defineConfig({
  plugins: [react()],
  base: '/github.io/',
})
