import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/hospital-fs/'  // match the repo name in GitHub Pages URL
});
