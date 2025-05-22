// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command }) => {
  const isDevelopment = command === 'serve';
  return {
    plugins: [react()], // The react plugin handles .jsx files automatically
    base: isDevelopment ? '/' : '/React-port/',
    // NO esbuild: { loader: "jsx", include: ... } section here if using .jsx file extension
  };
});