import { loadLayoutMiddleware } from "@/router/middleware/loadLayout.middleware";
import { AppLayoutsType } from "@/layouts/constants/layout.types";
import { createRouter, createWebHistory } from "vue-router";
import { RouterNames, WidgetRouterName } from "./constants/router.names";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: RouterNames.main,
      component: () => import("@/pages/index.vue"),
    },
    {
      path: '/products/:id',
      name: RouterNames.product,
      component: () => import("@/pages/Product.vue"),
    },
    {
      path: '/supabase',
      name: RouterNames.supabase,
      component: () => import("@/pages/Supabase.vue"),
    },
    {
      path: '/user',
      name: RouterNames.user,
      component: () => import("@/pages/User.vue"),
      meta: {
        layout: AppLayoutsType.cabinet,
      },
    },
    {
      path: '/cart',
      name: RouterNames.cart,
      component: () => import("@/pages/Supabase.vue"),
    },
    {
      path: '/challenge',
      name: RouterNames.challenge,
      component: () => import("@/pages/Challenge.vue"),
      meta: {
        layout: AppLayoutsType.challenge,
      },
      children: [
        {
          path: '/timer',
          name: WidgetRouterName.timer,
          component: () => import("@/widgets/timer/Timer.vue"),
        },
        {
          path: '/keyboard',
          name: WidgetRouterName.keyboard,
          component: () => import("@/widgets/keyboard/Keyboard.vue"),
        },
        {
          path: '/weather',
          name: WidgetRouterName.weather,
          component: () => import("@/widgets/Weather/Weather.vue"),
        },
      ]
    },
  ]

})

router.beforeEach(loadLayoutMiddleware);

export default router;
