import DefaultTheme from "vitepress/theme";
import SmartyUI from "@youngzhang/vite-ui";
console.log(SmartyUI);
// 插件的组件，主要是demo组件
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.use(SmartyUI);
  },
};
