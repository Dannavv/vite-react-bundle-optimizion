import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    build: {
        rollupOptions: {
            output: {
                // OPTIMIZATION LEVEL 3: Manual chunking for stable caching
                manualChunks: {
                    // React core libraries
                    'react-core': ['react', 'react-dom'],
                    // Router library
                    'router': ['react-router-dom'],
                    // Heavy location data library (loaded only when needed)
                    'location-data': ['country-state-city'],
                },
            },
        },
    },
})
