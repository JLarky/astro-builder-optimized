// @ts-check
import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import vue from "@astrojs/vue";
import solid from "@astrojs/solid-js";
import clickDirective from "./astro-click-directive/register";

// https://astro.build/config
export default defineConfig({
  // Enable many frameworks to support all different kinds of components.
  integrations: [
    clickDirective(),
    preact({ include: ["**/preact/*"] }),
    solid({
      include: ["**/solid/*", "./node_modules/@builder.io/sdk-solid/**"],
    }),
    react({ include: ["**/react/*"] }),
    svelte(),
    vue(),
  ],
  vite: {
    build: {
      sourcemap: true,
    },
    optimizeDeps: { exclude: ["isolated-vm"] },
  },
});
