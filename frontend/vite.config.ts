import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import { config } from 'dotenv'

config()

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    server: {
        host: 'localhost',
        port: 5173,
        hmr: {
            protocol: 'ws',
            host: 'localhost',
            port: 5173,
        },
    }
})
