import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// IMPORTANT for GitHub Pages:
// - If deploying to https://<username>.github.io/<repo-name>/  -> set base to '/<repo-name>/'
// - If this repo IS named <username>.github.io (root site)     -> set base to '/'
export default defineConfig({
  plugins: [react()],
  base: '/satishsawant/',
})
