/// <reference types="vitest" />

import { defineConfig } from "vite";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";

import typescript from "rollup-plugin-typescript2";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    typescript({
      tsconfig: "tsconfig.json",
      tsconfigOverride: { compilerOptions: { noImplicitAny: false } },
    }),
  ],
  build: {
    rollupOptions: {
      external: ["vue", "vue-router"],
      output: {
        globals: {
          vue: "Vue",
        },
        assetFileNames: "assets/[name].css",
      },
    },
    minify: "esbuild",
    sourcemap: true, // 输出单独 source文件
    cssCodeSplit: true,
    reportCompressedSize: true, // 生成压缩大小报告
    lib: {
      entry: "./src/entry.ts",
      name: "ViteUi",
      fileName: "vite-ui",
      formats: ["umd", "iife", "es", "cjs"],
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
