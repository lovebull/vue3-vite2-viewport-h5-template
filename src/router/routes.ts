import Layout from "@/layout/index.vue";
import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "root",
    component: Layout,
    redirect: { name: "Home" },
    children: [
      {
        path: "home",
        name: "Home",
        component: Home,
        meta: {
          title: "主页"
          
        }
      },
      {
        path: "tools",
        name: "Tools",
        component: () => import("@/views/tools/index.vue"),
        meta: {
          title: "视频"
        }
      },
      {
        path: "jdnutui",
        name: "Jdnutui",
        component: () => import("@/views/jd/index.vue"),
        meta: {
          title: "京东NutUI"
        }
      },
      // {
      //   path: "about",
      //   name: "About",
      //   component: () => import("@/views/about/index.vue"),
      //   meta: {
      //     title: "关于",
      //     noCache: true
      //   }
      // }
    ]
  }
];

export default routes;
