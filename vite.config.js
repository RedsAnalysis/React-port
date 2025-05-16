import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({ // Removed the ({ command }) => ... for now
  plugins: [react()],
  base: '/', // Force base to '/' for development
});