import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/roundupper-2/',
  plugins: [
    (() => {
      const pugToVue = new Map()
      return {
        name: 'pug-include-hmr',
        enforce: 'pre',
        transform(code, id) {
          if (!id.endsWith('.vue')) return null

          const templateMatch = code.match(
            /<template[^>]*lang=["']pug["'][^>]*>([\s\S]*?)<\/template>/
          )
          if (!templateMatch) return null

          const pugContent = templateMatch[1]
          const vueDir = path.dirname(id)

          const includeRegex = /^\s*include\s+(\S+)/gm
          let match
          while ((match = includeRegex.exec(pugContent)) !== null) {
            let includePath = match[1].trim()
            if (!includePath.endsWith('.pug')) includePath += '.pug'
            const absPath = path.resolve(vueDir, includePath)
            if (fs.existsSync(absPath)) {
              this.addWatchFile(absPath)
              if (!pugToVue.has(absPath)) pugToVue.set(absPath, new Set())
              pugToVue.get(absPath).add(id)
            }
          }

          return null
        },
        handleHotUpdate({ file, server }) {
          if (!file.endsWith('.pug')) return
          const vueIds = pugToVue.get(file)
          if (!vueIds?.size) return

          const affected = []
          for (const vueId of vueIds) {
            const mod = server.moduleGraph.getModuleById(vueId)
            if (mod) {
              server.moduleGraph.invalidateModule(mod)
              affected.push(mod)
            }
          }
          return affected
        },
      }
    })(),
    vue(),
  ],
  css: {
    devSourcemap: false,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
