import AuthLayout from '@/layouts/AuthLayout.vue';
import RegisterLayout from '@/layouts/RegisterLayout.vue';
import SiteLayout from '@/layouts/SiteLayout.vue';
import TabletLayout from '@/layouts/TabletLayout.vue';
import Login from '@/views/Auth/Login.vue';
import Home from '@/views/Site/Home.vue';
import Dish from '@/views/Tablet/Dish.vue';
import Dishes from '@/views/Tablet/Dishes.vue';
import History from '@/views/Tablet/History.vue';
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);
Vue.component('site-layout', SiteLayout);
Vue.component('auth-layout', AuthLayout);
Vue.component('tablet-layout', TabletLayout);
Vue.component('register-layout', RegisterLayout);

/**
 * The config for the vue-router.
 * Whenever you see the following code:
 *
 * component: () =>
 *    import(/* webpackChunkName: "site" / '@/views/Site/Menu.vue')
 *
 * It means we lazyload the route whenever the user navigates to said route.
 */
const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { layout: 'site-layout' }
  },
  {
    path: '/menu',
    name: 'Menu',
    meta: { layout: 'site-layout' },
    component: () =>
      import(/* webpackChunkName: "site" */ '@/views/Site/Menu.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: { layout: 'site-layout' },
    component: () =>
      import(/* webpackChunkName: "site" */ '@/views/Site/Contact.vue')
  },
  {
    path: '/login',
    name: 'Login',
    meta: { layout: 'auth-layout' },
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    meta: { layout: 'register-layout' },
    component: () =>
      import(/* webpackChunkName: "register" */ '@/views/Register/Index.vue')
  },
  {
    path: '/tablet',
    name: 'Tablet',
    meta: { layout: 'tablet-layout' },
    component: Dishes
  },
  {
    path: '/tablet/history',
    name: 'History',
    meta: { layout: 'tablet-layout' },
    component: History
  },
  {
    path: '/tablet/:id',
    name: 'Dish',
    meta: { layout: 'tablet-layout' },
    component: Dish
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
