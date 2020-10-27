import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Config from '../components/Config.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "config" */ '../views/Home.vue'),
  },
  {
    path: '/config',
    name: 'Config',
    component: () => import(/* webpackChunkName: "config" */ '../components/Config.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
