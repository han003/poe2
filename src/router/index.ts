import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/chaos',
    name: 'Chaos',
    component: () => import(/* webpackChunkName: "chaos" */ '@/components/Chaos.vue'),
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "settings" */ '@/components/Settings.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
