import { defineConfig } from "vite";

import rust from "@wasm-tool/rollup-plugin-rust";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    rust({
      experimental: {
        directExports: true,
      },
    }),
  ],
});
