import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/guide/build.html#library-mode
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'vite-ts-lib', // < change here
      fileName: 'vite-ts-lib', // < and here
    },
  },
  plugins: [dts()],
});
