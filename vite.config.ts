import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

function saveMediaDevPlugin(): Plugin {
  return {
    name: 'save-media-dev-plugin',
    configureServer(server) {
      server.middlewares.use('/api/save-media', async (req, res) => {
        if (req.method === 'POST') {
          let body = ''
          req.on('data', chunk => { body += chunk })
          req.on('end', () => {
            try {
              const { item, scenes } = JSON.parse(body)
              if (!item || !item.id) {
                res.statusCode = 400
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({ error: 'Missing item or item.id' }))
                return
              }

              const filePath = path.resolve(__dirname, 'src/data/customMedia.ts')
              let currentList: Array<{ id: string; [key: string]: unknown }> = []
              let currentScenes: Record<string, unknown> = {}

              if (fs.existsSync(filePath)) {
                const content = fs.readFileSync(filePath, 'utf-8')
                const listMatch = content.match(/export const customMediaList: MediaItem\[\] = (\[[\s\S]*?\]);/)
                if (listMatch) {
                  try {
                    currentList = JSON.parse(listMatch[1])
                  } catch {
                    currentList = []
                  }
                }
                const scenesMatch = content.match(/export const customScenesRecord: Record<string, Scene\[\]> = (\{[\s\S]*?\});/)
                if (scenesMatch) {
                  try {
                    currentScenes = JSON.parse(scenesMatch[1])
                  } catch {
                    currentScenes = {}
                  }
                }
              }

              // Update list and scenes
              const existingIdx = currentList.findIndex(m => m.id === item.id)
              if (existingIdx >= 0) {
                currentList[existingIdx] = item
              } else {
                currentList.unshift(item)
              }

              if (scenes) {
                currentScenes[item.id] = scenes
              }

              const newContent = `import type { MediaItem, Scene } from './types';\n\nexport const customMediaList: MediaItem[] = ${JSON.stringify(currentList, null, 2)};\n\nexport const customScenesRecord: Record<string, Scene[]> = ${JSON.stringify(currentScenes, null, 2)};\n`
              fs.writeFileSync(filePath, newContent, 'utf-8')

              res.statusCode = 200
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ success: true, savedToFile: true }))
            } catch (err: unknown) {
              res.statusCode = 500
              res.setHeader('Content-Type', 'application/json')
              const errMsg = err instanceof Error ? err.message : String(err)
              res.end(JSON.stringify({ error: errMsg }))
            }
          })
        } else {
          res.statusCode = 405
          res.end('Method Not Allowed')
        }
      })
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), saveMediaDevPlugin()],
  base: "/TopGunPrompter/",
  server: {
    port: 3026,
    host: true,
    allowedHosts: true
  }
})