import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Custom dev middleware to save JSON files locally
function customLocalApi() {
  return {
    name: 'custom-local-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/save' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk.toString(); });
          req.on('end', () => {
            try {
              const { filename, data } = JSON.parse(body);
              if (!filename || !data) throw new Error("Missing filename or data");
              // Safely write to src/data
              const safeFilename = path.basename(filename);
              const filePath = path.resolve(__dirname, 'src/data', safeFilename);
              fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: true, message: `Saved ${safeFilename}` }));
            } catch (error) {
              res.statusCode = 400;
              res.end(JSON.stringify({ success: false, error: error.message }));
            }
          });
        } else {
          next();
        }
      });
    }
  }
}

export default defineConfig({
  plugins: [react(), customLocalApi()],
})
