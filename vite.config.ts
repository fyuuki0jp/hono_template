import devServer from '@hono/vite-dev-server'
import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  let config = {}
  if (mode === 'client') {
    config = {
      build: {
        rollupOptions: {
          input: '/src/app/index.tsx',
          output: {
            entryFileNames: 'static/client.js',
          },
        },
      },
    }
  } else {
    config = {
      server: {
        host: true,
      },
      resolve: {
        alias: {
          react: 'hono/jsx/dom',
          'react-dom': 'hono/jsx/dom',
        },
      },
      plugins: [
        devServer({
          entry: '/src/main.ts',
        }),
      ],
    }
  }
  return config
})
