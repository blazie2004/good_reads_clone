import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { Component } from 'react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{
    alias:{
      src:"/src",
      Components:"/src/Components",
      Pages:"/src/Pages",
      assets:"/src/assets",
      Layouts:"/src/Layouts",
      Configs:"/src/Configs",
      Helpers:"/src/Helpers",
      Routes:"/src/Routes",
      Redux:"/src/Redux",
    }
  },
})
