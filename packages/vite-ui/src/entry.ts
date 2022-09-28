import type { App } from "vue";
import JSXButton from "./Button";
import JSXButton2 from "./Button2";
import "uno.css";

// 导出单独组件
export { JSXButton };

// 编写一个插件，实现一个install方法
export default {
  install(app: App) {
    app.component(JSXButton.name, JSXButton);
    app.component(JSXButton.name, JSXButton2);
  },
};
