import { UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import path from "path";
const srcDir = path.resolve(__dirname, "./src/entry.ts");
console.log(srcDir);

export default {
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    // command === "build" && dts({ cleanVueFileName: true }),
    // command === "build" &&
    //   typescript({
    //     tsconfig: "tsconfig.json",
    //     tsconfigOverride: { compilerOptions: { noImplicitAny: false } },
    //   }),
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
      entry: srcDir,
      name: "ViteUi",
      fileName: "vite-ui",
      formats: ["umd", "es", "iife"],
    },
  },
} as UserConfig;
