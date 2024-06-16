import react from '@vitejs/plugin-react';
import * as path from 'path';
import { defineConfig } from 'vite';
import EnvironmentPlugin from 'vite-plugin-environment';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr(), EnvironmentPlugin('all')],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
