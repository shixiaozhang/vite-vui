/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-var-requires */
// 读取 vite 配置
import config from "../config";
import { build, defineConfig, InlineConfig, UserConfig } from "vite";
import fs from "fs";
import path from "path";
import dts from "vite-plugin-dts";
// import typescript from "rollup-plugin-typescript2";

const cwd = path.resolve(__dirname, "../");
console.log(cwd);
console.log(path.resolve(cwd, "./dist/"));

const buildAll = async () => {
  // 全量打包
  const _config = Object.assign({}, config, {
    plugins: [
      ...config.plugins!,
      dts({
        outputDir: path.resolve(cwd, "./dist/"),
        beforeWriteFile: (filePath: string, content: string) => {
          console.log("====================================");
          console.log(filePath);
          console.log(content);
          return {
            filePath: filePath && filePath.replace(/src\//, ""),
            content,
          };
        },
      }),
      // typescript({
      //   cwd: cwd,
      //   tsconfig: cwd + "/tsconfig.json",
      //   tsconfigOverride: { compilerOptions: { noImplicitAny: false } },
      // }),
    ],
  });
  console.log(_config);

  await build(defineConfig(_config as UserConfig) as InlineConfig);

  // 单独打包
  const srcDir = path.resolve(__dirname, "../src/");
  const defaultOutDir = config.build?.outDir ?? "./dist";
  // 过滤出单独的组件
  const filterDirs = fs.readdirSync(srcDir).filter((dir: string) => {
    console.log(dir);
    // 只要目录不要文件，且里面包含index.ts
    const componentDir = path.resolve(srcDir, dir); //拼接当前dir完整路径
    const isDir = fs.lstatSync(componentDir).isDirectory(); //判断是否是文件夹
    return isDir && fs.readdirSync(componentDir).includes("index.ts"); //判断是否存在index.ts文件
  });

  // 循环打包组件
  // filterDirs.forEach(async (dirName: string) => {});
  for (const dirName of filterDirs) {
    const outDir = path.resolve(defaultOutDir, dirName);

    const entryDir = path.resolve(srcDir, dirName);
    console.log(outDir);

    const custom = {
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
        entry: entryDir,
        name: dirName,
        fileName: "index",
        formats: ["es", "umd"],
      },
      outDir,
    };
    // 开始打包
    await build({
      build: custom,
    } as UserConfig);
  }
};

buildAll();
