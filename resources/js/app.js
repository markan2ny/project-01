import { createApp } from "vue";
import Main from "./components/Main.vue";
import router from "./router";

createApp(Main).use(router).mount("#root");
