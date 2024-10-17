import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCommonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [
    react(),
    viteCommonjs() // Sử dụng plugin commonjs của Vite
  ],
  build: {
    rollupOptions: {
      onwarn(warning, warn) {
        // Bỏ qua cảnh báo về xuất khẩu trùng lặp
        if (warning.code === 'DUPLICATE_EXPORTS') return;
        warn(warning);
      },
    },
    outDir: 'build',
  },
  resolve: {
    alias: {
      '@': '/src', // Alias cho thư mục src
    },
  },
  server: {
    port: 3000,
  },
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import '@fortawesome/fontawesome-free/css/all.css';`,
      },
    },
  },
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' }
  }
});
