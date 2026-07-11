import fs from 'node:fs'
import path from 'node:path'

const distPath = path.resolve('dist')
const serverPath = path.join(distPath, 'server')
const hostingSource = path.resolve('.openai/hosting.json')
const hostingTargetDir = path.join(distPath, '.openai')

fs.mkdirSync(serverPath, { recursive: true })
fs.mkdirSync(hostingTargetDir, { recursive: true })
fs.copyFileSync(hostingSource, path.join(hostingTargetDir, 'hosting.json'))

const server = `export default {
  async fetch(request, env) {
    const assetResponse = await env.ASSETS.fetch(request)
    if (assetResponse.status !== 404) {
      return assetResponse
    }

    if (request.method === 'GET') {
      const accept = request.headers.get('accept') || ''
      if (accept.includes('text/html')) {
        const indexUrl = new URL('/index.html', request.url)
        return env.ASSETS.fetch(new Request(indexUrl, request))
      }
    }

    return assetResponse
  },
}
`

fs.writeFileSync(path.join(serverPath, 'index.js'), server)
console.log('Wrote Sites server entrypoint to dist/server/index.js')
