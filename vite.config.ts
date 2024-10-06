import devServer from '@hono/vite-dev-server'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
    if (mode === 'client') {
        return {
            build: {
                rollupOptions: {
                    input: '/src/app/index.tsx',
                    output: {
                        entryFileNames: 'static/client.js'
                    }
                }
            }
        }
    } else {
        return {
            resolve: {
                alias: {
                  react: 'hono/jsx/dom',
                  'react-dom': 'hono/jsx/dom'
                }
            },
            plugins:[
                devServer({
                    entry: "/src/main.ts"
                })
            ]
        }
    }
})