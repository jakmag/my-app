import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // 1. If we see any request to '/jira-api'...
      '/jira-api': {
        // 2. ...forward it to our real JIRA server
        target: 'https://brightpick.atlassian.net',
        
        // 3. This is crucial
        changeOrigin: true,
        
        // 4. This rewrites the URL
        rewrite: (path) => path.replace(/^\/jira-api/, ''),
      }
    }
  }
})