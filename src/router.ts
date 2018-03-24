import Vue from "vue";
import Router from "vue-router";
import Characters from "./views/Characters.vue";
import Infos from "./views/Infos.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    { path: "/characters", component: Characters },
    { path: "/infos", component: Infos },
    { path: "", redirect: "/characters" }
  ]
});
