import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

import Home from '@/views/Site/Home.vue';
import Login from '@/views/Auth/Login.vue';
import Tablet from '@/views/Tablet/Index.vue';

import SiteLayout from '@/layouts/SiteLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';
import TabletLayout from '@/layouts/TabletLayout.vue';
import RegisterLayout from '@/layouts/RegisterLayout.vue';

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
    component: Tablet
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;
