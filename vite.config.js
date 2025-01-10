import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '',
  optimizeDeps: {
    include: ['prop-types'],
  },
  plugins: [react()]
});