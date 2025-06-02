// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  // 'command' is 'serve' during development (npm run dev)
  // 'command' is 'build' during production build (npm run build)

  // If your app is ALWAYS deployed to the root of the domain,
  // you can simplify this to: base: '/'
  const base = command === 'serve' ? '/' : '/'; // CORRECTED: Production base should be '/' for root deployment

  return {
    plugins: [react()],
    base: base, // Use the determined base path
    // No need for esbuild loader configuration for .jsx files if @vitejs/plugin-react is used.
    // It handles JSX transformation automatically.
  };
});