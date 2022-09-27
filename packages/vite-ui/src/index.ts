import { createApp } from "vue";
import Vui from "./entry";
import App from "./app.vue";
const app = createApp(App);
app.use(Vui).mount("#root");
