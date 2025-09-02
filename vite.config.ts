// vite.config.ts
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      nodePolyfills({
        protocolImports: true,
      }),
    ],
    define: {
      'process.env.NODE_ENV': JSON.stringify(mode), // 👈 gunakan `mode`
    },
  };
});