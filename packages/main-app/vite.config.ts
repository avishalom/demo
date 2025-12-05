import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@demo/shared-ui': path.resolve(__dirname, '../shared-ui/src'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
