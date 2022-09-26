/// <reference types="vitest" />

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
export default defineConfig({
  plugins: [vue(), vueJsx(), Unocss()],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "vue",
        },
        // assetFileNames: `assets/[name].css`,
      },
    },
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "ViteUi",
      fileName: "vite-ui",
      formats: ["umd", "iife", "es"],
    },
  },
  test: {
    //  Jest 一样样全局使用 API 需添加  "types": ["vitest/globals"]
    globals: true,
    // 将用于测试的环境。Vitest 中的默认环境是 Node.js 环境。
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/], //支持jsx
    },
  },
});
