import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
window.Kakao.init("ed68cdae999a45861eb5fe143fd1276a");
