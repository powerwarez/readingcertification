import { defineConfig } from 'vite';
import { unstable_vitePlugin as remix } from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

declare module "@remix-run/node" {
  interface Future {
    v3_singleFetch: true;
  }
}

export default defineConfig({
  plugins: [remix(), tsconfigPaths()],
  server: {
    port: 3000
  }
});
