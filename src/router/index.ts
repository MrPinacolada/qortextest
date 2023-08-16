import { createRouter, createWebHistory } from "vue-router";
import Singers from "@/views/Singers.vue";
import Albums from "@/views/Albums.vue";
import Addsong from "@/views/Addsong.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Singers,
    },
    {
      path: "/albums",
      name: "albums",
      component: Albums,
    },
    {
      path: "/addsong",
      name: "addsong",
      component: Addsong,
    },
  ],
});

export default router;
