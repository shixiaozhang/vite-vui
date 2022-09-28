/// <reference types="vitest" />

import { defineConfig, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";

export default defineConfig(() => ({
  plugins: [vue(), vueJsx(), Unocss()],
  test: {
    //  Jest 一样样全局使用 API 需添加  "types": ["vitest/globals"]
    globals: true,
    // 将用于测试的环境。Vitest 中的默认环境是 Node.js 环境。
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/], //支持jsx
    },
  },
})) as UserConfig;
